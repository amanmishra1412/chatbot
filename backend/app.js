const express = require("express");
const cors = require("cors");
const generateAIReply = require("./api");
require("dotenv").config();

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

        const reply = await generateAIReply(userMessage);
        res.json({ reply });

    } catch (error) {
        console.error("Chat Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000);
