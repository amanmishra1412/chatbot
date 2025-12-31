import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Input = ({ data }) => {
    const { message, setMessage } = data;
    const [userData, setUserData] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!userData.trim() || loading) return;

        setLoading(true);

        setMessage([...message, { from: "User", msg: userData }]);
        setUserData("");

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/chat`,
                { message: userData }
            );

            setMessage((prev) => [
                ...prev,
                { from: "Bot", msg: res.data.reply },
            ]);
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

    return (
        <form
            onSubmit={submitHandler}
            className="fixed bottom-4 w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] h-12 bg-gray-700 rounded-full px-4 flex items-center gap-3"
        >
            <input
                type="text"
                value={userData}
                onChange={(e) => setUserData(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-transparent outline-none text-sm sm:text-base"
                disabled={loading}
            />

            <button
                disabled={loading}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center border border-white shrink-0 disabled:opacity-50"
            >
                <i className="ri-send-plane-2-line text-lg"></i>
            </button>
        </form>
    );
};

export default Input;
