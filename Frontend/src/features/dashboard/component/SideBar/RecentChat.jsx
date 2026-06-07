import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RecentChats = ({ chats = [], onChatClick }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto scrollbar-none flex flex-col px-4 mt-2 mb-4">
      {/* Section Header */}
      {chats.length > 0 && (
        <div className="mb-2 px-3 pt-2">
          <h3 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
            Recent
          </h3>
        </div>
      )}

      {/* Scrollable Chat List */}
      <div className="flex flex-col gap-0.5">
        {chats.map((chat) => (
          <button
            key={chat.chat_id}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] rounded-xl hover:bg-[var(--color-surface-raised)] transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-teal-100 dark:focus:ring-teal-900/50"
            onClick={() => {
              navigate(`/chat/${chat.chat_id}`);
              onChatClick?.();
            }}
          >
            <MessageSquare
              size={16}
              className="text-[var(--color-text-muted)] group-hover:text-teal-500 dark:group-hover:text-teal-400 shrink-0 transition-colors"
            />
            <span className="truncate">{chat.title}</span>
          </button>
        ))}

        {/* Empty State Fallback */}
        {chats.length === 0 && (
          <div className="px-3 py-4 text-sm text-[var(--color-text-muted)] italic">
            No recent chats
          </div>
        )}
      </div>
    </div>
  );
};

