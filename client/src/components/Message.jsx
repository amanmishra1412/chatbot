import React from "react";

const Message = ({ data }) => {
    const isUser = data.from === "User";
    const isLoading = data.msg === "loading";

    return (
        <div
            className={`flex w-full my-3 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`
            px-4 py-2 rounded-2xl
            max-w-[75%]
            text-sm sm:text-base
            shadow-md
            ${
                isUser
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-white/10 text-gray-200 border border-white/10"
            }
        `}
            >
                {isLoading ? (
                    <div className="flex gap-1">
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                ) : (
                    data.msg
                )}
            </div>
        </div>
    );
};

export default Message;
