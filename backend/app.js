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
    const userMessage = req.body.message;

    const reply = await generateAIReply(userMessage);

    res.json({ reply: reply });
});

app.listen(3000);
