import {apiClient} from "../../../api/apiClient.js";
const BASE_API_URL = import.meta.env.VITE_Backend_URL;
export const sendMessage = async (message, id) => {
  try {
    const response = await fetch(`${BASE_API_URL}/chat`, {
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
