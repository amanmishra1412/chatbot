import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Input from "./components/Input";
import ChatWindow from "./components/ChatWindow";


const App = () => {
    const [message, setMessage] = useState([
        { from: "Bot", msg: "Chat AnyThing With Me" },
    ]);
    return (
        <>
            <div className="relative bg-[#111111] h-screen w-full text-white p-5 flex flex-col items-center gap-8">
                <h1 className="text-5xl">Ai Chat App</h1>
                <ChatWindow message={message} />
                <Input data={{ message, setMessage }} />
            </div>
        </>
    );
};

export default App;
