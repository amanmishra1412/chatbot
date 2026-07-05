require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getGroqChatCompletion, getGeminiChatCompletion } = require("./api");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/chat", async (req, res) => {
    try {
        const { message, provider } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message is required",
            });
        }

        let reply = "";

        if (provider === "gemini") {
            reply = await getGeminiChatCompletion(message);
        } else {
            reply = await getGroqChatCompletion(message);
        }

        res.json({ reply });
    } catch (error) {
        res.status(500).json({
            error: "Something went wrong",
            msg: error.message,
        });
    }
});

app.listen(3000);
