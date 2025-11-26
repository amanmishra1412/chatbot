import React from "react";

const Messages = ({ data }) => {
    return (
        <div
            className={`flex w-full my-3 ${
                data.from === "User" ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`px-4 py-2 rounded-2xl max-w-[60%] 
                ${
                    data.from === "User" ? "bg-blue-600" : "bg-gray-700"
                } text-white`}
            >
                <p>
                    {data.from} : {data.msg}
                </p>
            </div>
        </div>
    );
};

export default Messages;
