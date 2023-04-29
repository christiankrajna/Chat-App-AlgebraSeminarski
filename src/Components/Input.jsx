import React from "react";

export default function Input({ message, handleSendMessage, handleInputChange, handleLogout, inputRef }) {

  return (
    <div>
      <form onSubmit={handleSendMessage} className="input-form-wrapper">

        <input
          type="text"
          placeholder="Enter your message ..."
          value={message === "" ? "" : message}
          onChange={handleInputChange}
          ref={inputRef} />

        <button type="submit" className="send-btn" >Send</button>
      </form>

      <div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};
