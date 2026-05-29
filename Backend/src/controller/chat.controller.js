import { promptBuilder } from "../aiService/buildPrompt.js";
import { retrival } from "../RAG/retrival.js";
import { genrateResponse } from "../aiService/generateResponse.js";

export const chatController = async (req, res) => {
try {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }
      res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });
  const retrivedData = await retrival(message);
  const soucrcedata = retrivedData.matches.map((m) => m.metadata.source);
  const prompt = promptBuilder(message, retrivedData);

  const reply = await genrateResponse(prompt);

  for await (const chunk of reply) {
    const text = chunk.text || "";
    res.write(`data: ${JSON.stringify(text)}\n\n`);
  }
  res.write(`event: sources\n`);
res.write(`data: ${JSON.stringify(soucrcedata)}\n\n`);
  res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
  
};

