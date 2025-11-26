import React, { useState } from "react";
import axios from "axios";

const Input = ({ data }) => {
    const { message, setMessage } = data;

    const [userData, setUserData] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!userData.trim()) return;

        setMessage([...message, { from: "User", msg: userData }]);
        setUserData("");

        try {
            const res = await axios.post("http://localhost:3000/chat", {
                message: userData,
            });
            // console.log(res);
            setMessage((prev) => [
                ...prev,
                { from: "Bot", msg: res.data.reply },
            ]);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className="absolute w-[50%] h-12 bg-gray-600 bottom-10 rounded-3xl px-5 outline-0 flex justify-between items-center gap-5"
        >
            <input
                type="text"
                value={userData}
                onChange={(e) => {
                    setUserData(e.target.value);
                }}
                placeholder="Enter Text"
                className="w-full outline-0"
            />
            <button className="w-10 h-10 rounded-full flex justify-center items-center border-2 border-white">
                <i className="ri-send-plane-2-line text-xl"></i>
            </button>
        </form>
    );
};

export default Input;
