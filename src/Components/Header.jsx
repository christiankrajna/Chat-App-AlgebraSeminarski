import React from "react";

export default function Header({ userName, userColor }) {

  return (

    <div className="chat-header">
      <h1 className="header-welcome"> Welcome to Zoo Chat </h1>
      <div className="chat-header-user">
        <h1> {userName}</h1>
        <div className="header-user-color"
          style={{ width: "2rem", height: "1rem", borderRadius: '2rem', backgroundColor: userColor, }}>
        </div>
      </div>
    </div>

  );
};

