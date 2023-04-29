import React, { useState, useEffect, useRef } from "react";
import Input from "./Input";
import Header from "./Header";
import Messages from "./Messages";


export default function ChatMain({ userName, userColor, setIsLogged }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const droneRef = useRef(null);
  const inputRef = useRef(null);


  useEffect(() => {
    const drone = new window.Scaledrone("0ZLFUg99FpY3wVN5");
    drone.on("open", (error) => {
      if (error) {
        console.log(error);
      }
    });

    droneRef.current = drone;
    const room = drone.subscribe("observable-room");
    room.on("data", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      room.unsubscribe();
    };
  }, []);


  function handleInputChange(e) {
    setMessage(e.target.value);
  };


  function handleSendMessage(e) {
    e.preventDefault();
    if (!message.trim()) {
      return;
    }
    droneRef.current.publish({
      room: "observable-room",
      message: { userName, userColor, message }
    });
    
    inputRef.current.focus();
    e.target.reset();
    setMessage("");

  };


  function handleLogout() {
    setIsLogged(false);
    console.log(`Your character ${userName} logged out`);
  }


  return (
    <div className="chat-main-wrapper">
      <Header userName={userName} userColor={userColor} />
      <Messages messages={messages} userName={userName} userColor={userColor} />
      <Input userName={userName} handleSendMessage={handleSendMessage} handleInputChange={handleInputChange} handleLogout={handleLogout} setIsLogged={setIsLogged} inputRef={inputRef} />
    </div>
  );
};
