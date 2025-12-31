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
            <div className="relative bg-[#111111] min-h-screen w-full text-white px-3 sm:px-6 py-4 flex flex-col items-center gap-6">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
                    AI Chat App
                </h1>

                <ChatWindow message={message} />
                <Input data={{ message, setMessage }} />
            </div>
        </>
    );
};

export default App;
