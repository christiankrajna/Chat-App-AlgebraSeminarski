import React, { useState } from 'react';
import "../src/styles/app.scss";
import Login from './Components/Login';
import ChatMain from './Components/ChatMain';


export default function App() {

  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('')
  const [isLogged, setIsLogged] = useState(false)


  function setUser(userName, userColor) {
    setUserName(userName);
    setUserColor(userColor);
  }

  
  if (isLogged)
    return (
      <div>
        <ChatMain userColor={userColor} userName={userName} setIsLogged={setIsLogged} />
      </div>
    )

  if (!isLogged)
    return (
      <div>
        <Login setIsLogged={setIsLogged} setUser={setUser} />
      </div>
    );
}

