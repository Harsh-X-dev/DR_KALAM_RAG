import { Send } from "lucide-react";
import { useChat } from "../hooks/useChat.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
export const ChatInput = ({ chatId }) => {
  const [query, setQuery] = useState("");
  const { handleSendMessage, setMessage } = useChat();
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage((prev) => [
      ...prev,
      {
        id: Date.now(),
        user_message: query,
        assistant_message: "",
        sources: [],
      },
    ]);

    let id;
    if (!chatId) {
      id = nanoid();
      navigate(`/chat/${id}`);
    }
    id = chatId || id;
    handleSendMessage(query, id);
    setQuery("");
  };

  return (
    <div className="p-6 bg-[var(--color-surface-raised)]">
      {/* Changed to a form to natively support "Enter" key submission */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto relative flex items-center"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything about Dr. A. P. J. Abdul Kalam..."
          aria-label="Chat input"
          className="w-full bg-[var(--color-input-bg)] border border-[var(--color-input-border)] text-[var(--color-text-primary)] px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-input-ring)] focus:border-[var(--color-accent)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] pr-16 text-[15px] placeholder:text-[var(--color-text-muted)] transition-colors"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="absolute right-3 w-10 h-10 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-accent-hover)] transition-colors shadow-sm"
        >
          {/* Replaced bulky inline SVG with Lucide React icon */}
          <Send className="w-4 h-4 ml-0.1" strokeWidth={2.5} />
        </button>
      </form>

      <div className="text-center mt-3">
        <p className="text-[11px] text-[var(--color-text-muted)]">
          {/* Fixed "Cha" typo to "Chat" */}
          DR KALAM RAG Chat can make mistakes. Please verify important
          information.
        </p>
      </div>
    </div>
  );
};
