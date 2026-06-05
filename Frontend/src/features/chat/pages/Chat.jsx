import { UserMessage, SystemMessage } from "../components/ChatMessages.jsx";
import { useParams } from "react-router-dom";
import { useChat } from "../hooks/useChat.js";
import { useEffect } from "react";
import {Loading} from "../../../component/Loading.jsx";

export const Chat = () => {
  const { message,handleGetMessages,chatLoading } = useChat();
  const { chatId } = useParams();
  useEffect(() => {
    if (chatId) {
      handleGetMessages(chatId);
    }
  }, [chatId]);
if(chatLoading){
  return <Loading fullScreen={true} size={15} />;
}
  return (
    <div className="w-full p-8">
      {message.map((msg) => {
        return (
          <div key={msg.message_id} className="max-w-4xl mx-auto pb-6">
            <UserMessage text={msg.user_message} />
            <SystemMessage text={msg.assistant_message} sources={msg.sources} />
          </div>
        );
      })}
    </div>
  );
};
