import React, { useEffect, useRef } from "react";
import Message from "./Message";

const ChatWindow = ({ message }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] h-[60vh] sm:h-[65vh] md:h-[70vh] bg-[#212121] rounded-xl p-4 overflow-y-auto">
            {message.map((m, i) => (
                <Message key={i} data={m} />
            ))}
            <div ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatWindow;
