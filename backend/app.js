const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/chat", (req, res) => {
    const userMessage = req.body.message;

    const botReply = `Bot says: You wrote "${userMessage}"`;

    res.json({ reply: botReply });
});

app.listen(3000);
