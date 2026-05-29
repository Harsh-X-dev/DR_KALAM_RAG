import genAI from "../config/gemini.js";
export const createEmbedding = async (text) => {
  try {
    const embedding = await genAI.models.embedContent({
      model: "gemini-embedding-2",
      contents: text,
    });
    return embedding.embeddings[0].values;
  } catch (err) {
    console.error(err);
  }
};
