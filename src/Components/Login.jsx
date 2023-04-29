import React, { useState } from 'react'
import { randomAnimal, addRandomColor } from '../Names/ZooNames';

export default function Login({ setUser, setIsLogged }) {

    const [userName, setUserName] = useState(randomAnimal());
    const [userColor, setUserColor] = useState(addRandomColor())


    function createName() {
        setUserName(randomAnimal());
        setUserColor(addRandomColor());
    }

    function handleSetUser(e) {
        e.preventDefault();

        setUser(userName, userColor)
        setIsLogged(true);
        console.log(`user: ${userName} \ncolor: ${userColor}`);
    }

    return (
        <div className="chat-login-wrapper">

            <form className="user-form-wrapper" onSubmit={handleSetUser}>
                <h2>to Zoo Chat</h2>
                <div className="name-wrapper">
                    <div className="name-color">
                        <h3>Animal: {userName}</h3>
                    </div>
                    <div style={{ width: "2rem", height: "2rem", borderRadius: '50%', backgroundColor: userColor, }}>
                    </div>
                </div>
                <button type="button" onClick={createName} className="login-btn">Animal Name</button>
                <button type="submit" className="login-btn">Login</button>
            </form>

        </div>
    )
}