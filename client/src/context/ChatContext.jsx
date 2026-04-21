import React, { createContext, useContext, useState } from "react";

export const ChatProvider = createContext();

const ChatContext = ({ children }) => {
    const [message, setMessage] = useState([
        { from: "Bot", msg: "Chat AnyThing With Me" },
    ]);

    const [loading, setLoading] = useState(false);

    return (
        <ChatProvider.Provider
            value={{ message, setMessage, loading, setLoading }}
        >
            <div>{children}</div>
        </ChatProvider.Provider>
    );
};

export default ChatContext;

export const useChat = () => {
    return useContext(ChatProvider);
};
