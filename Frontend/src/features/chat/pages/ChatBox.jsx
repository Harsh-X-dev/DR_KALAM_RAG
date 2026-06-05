// import { UserMessage, SystemMessage } from "../components/ChatMessages";
import { Outlet } from "react-router-dom";
import { ChatInput } from "../components/ChatInput";
import { WelcomeScreen } from "../components/WelcomeScreen.jsx";
import { useParams } from "react-router-dom";
export const ChatBox = () => {
  const { chatId } = useParams();

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full  overflow-y-auto ">
      <div className="flex-1 overflow-y-auto flex flex-col scroll-smooth"></div>
      {chatId ? <Outlet /> : <WelcomeScreen />}
      <div className="w-full max-w-4xl mx-auto px-4 pb-6 pt-2">
        <ChatInput chatId={chatId} />
      </div>
    </div>
  );
};
