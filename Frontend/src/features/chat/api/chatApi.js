import {apiClient} from "../../../api/apiClient.js";

export const sendMessage = async (message, id) => {
  try {
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        "chat-id": id || "",
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error();
    }
    return response.body.getReader();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getChats = async () => {
  try {
    const response = await apiClient.get("/chat");
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getMessages = async (chatId) => {
  try {
    const response = await apiClient.get(`/chat/messages/${chatId}`);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
