const Groq = require("groq-sdk")

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const main = async () => {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");
}

const getGroqChatCompletion = async (msg) => {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: msg,
            },
        ],
        model: "openai/gpt-oss-20b",
    });
}

module.exports = { main, getGroqChatCompletion }