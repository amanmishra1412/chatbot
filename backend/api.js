const axios = require("axios");

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const generateAIReply = async (userMessage) => {
  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    throw new Error("Failed to generate AI reply");
  }
};

module.exports = generateAIReply;
