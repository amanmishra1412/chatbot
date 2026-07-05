const Groq = require("groq-sdk");
const { GoogleGenAI } = require("@google/genai");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const getGroqChatCompletion = async (msg) => {
    const response = await groq.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [
            {
                role: "user",
                content: msg,
            },
        ],
    });

    return response.choices[0].message.content;
};

const getGeminiChatCompletion = async (msg) => {
    const response = await gemini.interactions.create({
        model: "gemini-3.5-flash",
        input: msg,
    });

    return response.output_text;
};

module.exports = {
    getGroqChatCompletion,
    getGeminiChatCompletion,
};
