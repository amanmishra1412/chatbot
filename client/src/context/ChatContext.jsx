import React, { createContext, useContext, useState } from "react";

export const ChatProvider = createContext();

const ChatContext = ({ children }) => {
    const [message, setMessage] = useState([
        { from: "Bot", msg: "Chat AnyThing With Me" },
    ]);

    const [loading, setLoading] = useState(false);

    const [provider, setProvider] = useState("groq");

    return (
        <ChatProvider.Provider
            value={{
                message,
                setMessage,
                loading,
                setLoading,
                provider,
                setProvider,
            }}
        >
            {children}
        </ChatProvider.Provider>
    );
};

export default ChatContext;

export const useChat = () => useContext(ChatProvider);
