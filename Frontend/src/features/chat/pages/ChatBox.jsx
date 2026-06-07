import { Outlet } from "react-router-dom";
import { ChatInput } from "../components/ChatInput";
import { WelcomeScreen } from "../components/WelcomeScreen.jsx";
import { useParams } from "react-router-dom";

export const ChatBox = () => {
  const { chatId } = useParams();

  return (
    <div className="flex flex-col h-[calc(100dvh-64px)] w-full">
      {/* Scrollable message area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col scroll-smooth">
        {chatId ? <Outlet /> : <WelcomeScreen />}
      </div>

      {/* Sticky input pinned to the bottom */}
      <div className="shrink-0 w-full max-w-4xl mx-auto px-3 sm:px-4 pb-4 pt-2">
        <ChatInput chatId={chatId} />
      </div>
    </div>
  );
};

