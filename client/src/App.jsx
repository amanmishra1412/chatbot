import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Input from "./components/Input";
import ChatWindow from "./components/ChatWindow";
import { useChat } from "./context/ChatContext";

const App = () => {
    const { message, setMessage, provider, setProvider } = useChat();

    const resetBtn = () => {
        setMessage([]);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white flex flex-col items-center px-2 sm:px-4 md:px-6 py-4">
            <div className="w-full max-w-4xl flex justify-between items-center mb-4">
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    AI Chat
                </h1>

                <div className="flex items-center gap-3">
                    <select
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        className="bg-slate-800 border border-slate-600 rounded-xl px-3 py-2"
                    >
                        <option value="groq">Groq</option>
                        <option value="gemini">Gemini</option>
                    </select>

                    <button
                        onClick={resetBtn}
                        className="px-4 py-2 bg-orange-500 rounded-xl"
                    >
                        New Chat
                    </button>
                </div>
            </div>

            <ChatWindow />
            <Input />
        </div>
    );
};

export default App;
