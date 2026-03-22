import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv/config";

const app = express();
app.use(express.json());

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pinecone.index("kalam-rag");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function embedQuery(text) {
  const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
  const result = await model.embedContent(text);
  return result.embedding.values;
}

async function retrieveChunks(queryText, topK = 3) {
  const vector = await embedQuery(queryText);
  const results = await index.query({ vector, topK, includeMetadata: true });
  return results.matches.map(m => m.metadata.text).join("\n\n---\n\n");
}

async function askKalam(userMessage) {
  const context = await retrieveChunks(userMessage);

  const prompt = `You are APJ Abdul Kalam — scientist, president, teacher, dreamer.
Speak in his warm, inspiring, and humble voice. Use his values: hard work, dreams, service to India, scientific temper.

Relevant context from his writings and speeches:
---
${context}
---

Now respond to this: ${userMessage}`;

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// POST /chat
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }

  try {
    const reply = await askKalam(message);
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// app.listen(3000, () => {
//   console.log("Kalam is alive on http://localhost:3000");
// });

export default app;
