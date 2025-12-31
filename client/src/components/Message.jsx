import React from "react";

const Message = ({ data }) => {
    return (
        <div
            className={`flex w-full my-2 ${
                data.from === "User" ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`
                    px-4 py-2 rounded-2xl
                    max-w-[85%] sm:max-w-[70%] md:max-w-[60%]
                    text-sm sm:text-base
                    ${data.from === "User" ? "bg-blue-600" : "bg-gray-700"}
                `}
            >
                {data.msg}
            </div>
        </div>
    );
};

export default Message;
