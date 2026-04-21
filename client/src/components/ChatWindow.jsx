import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useChat } from "../context/ChatContext";

const ChatWindow = () => {
    const { message, loading } = useChat();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div className="w-full max-w-4xl flex-1 min-h-[60vh] max-h-[70vh] bg-white/5 backdrop-blur-lg  border border-white/10  rounded-2xl p-3 sm:p-4  overflow-y-auto shadow-xl">
            {message.map((msg, i) => (
                <Message key={i} data={msg} />
            ))}
            {loading && <Message data={{ from: "Bot", msg: "loading" }} />}
            <div ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatWindow;
