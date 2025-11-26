import React, { useEffect, useRef } from "react";
import Messages from "./Messages";

const ChatWindow = ({ message }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div className="w-[50%] relative h-96 bg-[#212121] rounded p-5 overflow-auto">
            {message.map((m, i) => (
                <Messages key={i} data={m} />
            ))}
            <div ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatWindow;
