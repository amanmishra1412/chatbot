import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Input from "./components/Input";
import ChatWindow from "./components/ChatWindow";
import { useChat } from "./context/ChatContext";

const App = () => {
    const { message, setMessage } = useChat();

    const resetBtn = () => {
        setMessage([]);
    };

    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white flex flex-col items-center px-2 sm:px-4 md:px-6 py-4">
                <div className="w-full max-w-4xl flex justify-between items-center mb-4">
                    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                        AI Chat
                    </h1>

                    <button
                        onClick={resetBtn}
                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 transition rounded-xl text-sm shadow-md"
                    >
                        New Chat
                    </button>
                </div>
                <ChatWindow />
                <Input />
            </div>
        </>
    );
};

export default App;
