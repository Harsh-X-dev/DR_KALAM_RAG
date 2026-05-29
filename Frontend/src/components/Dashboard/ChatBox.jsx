import { SystemMessage } from "./ChatBox/SystemMessage";
import { UserMessage } from "./ChatBox/UserMessage";
import { ChatInput } from "./ChatBox/ChatInput";
export const ChatBox = () => (
  <>
    <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
      <div className="max-w-4xl mx-auto">
        {/* Sample Conversation matching the blueprint structure */}
        <UserMessage text="What did Dr. Kalam say about dreams?" />

        <SystemMessage
          text="Dr. Kalam believed that “Dreams are not what you see in sleep, dreams are those that do not let you sleep.” He emphasized that dreams have the power to transform into thoughts and actions that can change the world."
          sources={[
            "Wings of Fire (Autobiography)",
            "Ignited Minds",
            "My Journey",
          ]}
        />
      </div>
    </div>
    <ChatInput />
  </>
);
