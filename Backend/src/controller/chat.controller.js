import db from "../config/prisma.js";
import { promptBuilder } from "../aiService/buildPrompt.js";
import { retrival } from "../RAG/retrival.js";
import { genrateResponse } from "../aiService/generateResponse.js";
import { genrateTitle } from "../aiService/generateTitle.js";

const saveMessages = async (chatId, userMessage, assistentReply, sources) => {
  try {
    const message = await db.messages.create({
      data: {
        chat_id: chatId,
        user_message: userMessage,
        assistant_message: assistentReply,
        sources: sources,
      },
    });
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const isFirstMessage = async (chatId) => {
  try {
    const messages = await db.messages.count({
      where: { chat_id: chatId },
    });
    if (messages === 0) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const getPreviousMessages = async (chatId) => {
  try {
    const messages = await db.messages.findMany({
      where: { chat_id: chatId },
      orderBy: { created_at: "asc" },
      take: 10,
    });
    return messages.map((msg) => msg.user_message).join("\n");
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const createChat = async (userId, chatId, message) => {
  try {
    const title = await genrateTitle(message);
    const chat = await db.chats.create({
      data: {
        user_id: userId,
        chat_id: chatId,
        title: title,
      },
    });
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
export const chatController = async (req, res) => {
  try {
    const { message } = req.body;
    const chatId = req.get("chat-id");
    const userId = req.user.user_id;
    let saveReply = "";

    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    if (await isFirstMessage(chatId)) {
      await createChat(userId, chatId, message);
    }

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    const retrivedData = await retrival(message);
    const soucrcedata = retrivedData.matches.map((m) => m.metadata.source);
    const previousMessages = await getPreviousMessages(chatId);
    const prompt = promptBuilder(message, retrivedData, previousMessages);

    const reply = await genrateResponse(prompt);
    res.write(`event: message\n`);
    for await (const chunk of reply) {
      const text = chunk.text || "";
      res.write(`data: ${JSON.stringify(text)}\n\n`);
      saveReply += text;
    }
    res.write(`event: sources\n`);
    res.write(`data: ${JSON.stringify(soucrcedata)}\n\n`);
    res.end();
    // console.log("Final reply:", saveReply);
    // console.log("Sources:", soucrcedata);

    await saveMessages(chatId, message, saveReply, soucrcedata);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getAllChatsController = async (req, res) => {
  const userId = req.user.user_id;
  try {
    const chats = await db.chats.findMany({
      where: { user_id: userId },
      orderBy: { created_at: "desc" },
    });
    // console.log(chats);
    res.status(200).json(chats);
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};
export const getAllMessagesController = async (req, res) => {
  const chatId = req.params.chatId;
  console.log(chatId);
  try {
    const messages = await db.messages.findMany({
      where: { chat_id: chatId },
      orderBy: { created_at: "asc" },
    });
    res.status(200).json(messages);
    // console.log(messages);
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};
