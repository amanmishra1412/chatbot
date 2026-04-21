require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { main, getGroqChatCompletion } = require("./api");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: "Message is required" });
        }

        const reply = await getGroqChatCompletion(userMessage);
        res.json({ reply: reply.choices[0]?.message?.content || "" });
    } catch (error) {
        // console.error("Chat Error:", error.response?.status || error.message);

        res.status(500).json({
            error: "something went wrong",
            msg: error.message
        });
    }
});

app.listen(3000);
