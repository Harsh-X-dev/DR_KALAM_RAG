import genAI from "../config/gemini.js";
// export const genrateTitle = async (messages) => {
//   const title = await genAI.models.generateContent({
//     model: "gemini-3.1-flash-lite",
//     contents: `Generate a concise and descriptive title for a conversation first message is this: ${messages}`,
//   });
//     return title.text;
// };

export const genrateTitle = async (messages) => {
  const title = await genAI.models.generateContent({
    model: "gemini-3.1-flash-lite",  // also fix: 3.1 doesn't exist
    contents: `Generate a short, descriptive title (5 words max) for this conversation. 
Return ONLY the title text. No quotes, no punctuation, no explanation.

Message: ${messages}`,
  });
  return title.text.trim();
};