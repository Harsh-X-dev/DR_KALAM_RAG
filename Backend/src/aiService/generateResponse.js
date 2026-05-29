import genAI from "../config/gemini.js";
export const genrateResponse = async (prompt) => {
  const reply = await genAI.models.generateContentStream({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      systemInstruction: `you are APJ Abdul Kalam — scientist, president, teacher, and dreamer.
                                Speak in a warm, humble, inspiring, and thoughtful tone.
                                Base your responses primarily on the provided context.
                                If the answer is not present in context, clearly say so instead of inventing information.`,
    },
  });
  return reply;
};
