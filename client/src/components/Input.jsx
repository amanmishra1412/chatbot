import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useChat } from "../context/ChatContext";

const Input = () => {
    const { message, setMessage, loading, setLoading, provider } = useChat();

    const [userData, setUserData] = useState("");
    const inputRef = useRef(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!userData.trim() || loading) return;

        setLoading(true);

        setMessage([...message, { from: "User", msg: userData }]);
        setUserData("");

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/chat`,
                {
                    message: userData,
                    provider,
                },
            );

            setMessage((prev) => [
                ...prev,
                { from: "Bot", msg: res.data.reply },
            ]);

            inputRef.current?.focus();
        } catch (err) {
            // console.error(err);

            if (err.response?.status === 429) {
                Swal.fire({
                    icon: "warning",
                    title: "AI Limit Reached",
                    text: err.response.data.error,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong. Please try again.",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!loading) {
            inputRef.current?.focus();
        }
    }, [loading]);

    return (
        <form
            onSubmit={submitHandler}
            className="w-full max-w-4xl mt-3 sticky bottom-0"
        >
            <div className="flex items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 shadow-lg">
                <input
                    ref={inputRef}
                    type="text"
                    value={userData}
                    onChange={(e) => setUserData(e.target.value)}
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent outline-none text-sm sm:text-base text-white placeholder-gray-400"
                    disabled={loading}
                />

                <button
                    disabled={loading}
                    className="ml-2 w-10 h-10 rounded-full flex items-center justify-center 
            bg-gradient-to-r from-blue-500 to-orange-500 
            hover:scale-105 transition shadow-md disabled:opacity-50"
                >
                    <i className="ri-send-plane-2-line text-lg"></i>
                </button>
            </div>
        </form>
    );
};

export default Input;
