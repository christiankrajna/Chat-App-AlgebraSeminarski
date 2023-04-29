import React, { useEffect, useRef } from "react";

export default function Messages({ messages, userName, userColor }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="messages-wrapper" ref={scrollRef}>

      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-box ${message.userName === userName
            ? "message-box-right"
            : "message-box-left"
            }`}>

          <div className="box-content">
            <div className="message-box-content">
              <div className="message-user">{message.userName}</div>
              <div className="message-text"
                style={
                  message.userName === userName
                    ? { backgroundColor: userColor }
                    : { backgroundColor: message.userColor }}
              >{message.message}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};