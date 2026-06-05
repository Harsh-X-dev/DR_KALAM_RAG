import { useContext, useState } from "react";
import { ChatContext } from "../chatContext.jsx";
import { sendMessage, getMessages } from "../api/chatApi.js";
import { toast } from "sonner";
export function useChat() {
  const { loading, setLoading, message, setMessage } = useContext(ChatContext);
  const [chatLoading, setChatLoading] = useState(true);

  const handleSendMessage = async (message, id) => {
    setLoading(true);
    try {
      const reader = await sendMessage(message, id);
      const decoder = new TextDecoder();
      let answer = "";
      let currentEvent = "message";
      setLoading(false);
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const data = decoder.decode(value);
        const lines = data.split("\n");

        for (const line of lines) {
          if (line.startsWith("event: ")) {
            currentEvent = line.replace("event: ", "").trim();
            continue;
          }

          if (line.startsWith("data: ")) {
            const text = line.replace("data: ", "");

            if (currentEvent === "sources") {
              const sourceData = JSON.parse(line.replace("data: ", ""));
              setMessage((prev) => {
                const copy = [...prev];
                copy[copy.length - 1].sources = sourceData;
                return copy;
              });
              continue;
            }
            answer += JSON.parse(text);
            // console.log(answer);
            setMessage((prev) => {
              const copy = [...prev];
              // console.log(copy);
              copy[copy.length - 1].assistant_message = answer;
              return copy;
            });
          }
        }
      }
    } catch (error) {
      setLoading(false);
      setMessage((prev) => {
        const copy = [...prev];
        copy[copy.length - 1].assistant_message =
          "`An error occurred while sending the message.` ";
        return copy;
      });
      toast.error(
        error.response?.data?.message ||
          "An error occurred while sending the message.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGetMessages = async (chatId) => {
    try {
      setChatLoading(true);
      const messages = await getMessages(chatId);
        // console.log("GET MESSAGES", messages.data);

      // console.log(messages.data);
      if (!messages?.data || messages.data.length === 0) {
        return;
        // throw new Error("No messages found for this chat.");
      }
      setMessage(messages?.data);
      setChatLoading(false);
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message ||
          "An error occurred while fetching messages.",
      );
    }finally {
      setChatLoading(false);
    }
  };

  return {
    handleSendMessage,
    loading,
    message,
    setMessage,
    chatLoading,
    handleGetMessages,
  };
}
