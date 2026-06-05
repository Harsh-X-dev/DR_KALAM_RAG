import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RecentChats = ({ chats = [] }) => {
  const navigate = useNavigate();

  return (
    // flex-1 ensures it fills the remaining space between the top Nav and bottom ThemeSwitch
    <div className="flex-1 overflow-y-auto  scrollbar-none flex flex-col px-4 mt-2 mb-4">
      {/* Section Header */}
      {chats.length > 0 && (
        <div className="mb-2 px-3 pt-2">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Recent
          </h3>
        </div>
      )}

      {/* Scrollable Chat List */}
      <div className="flex flex-col gap-0.5">
        {chats.map((chat) => (
          <button
            key={chat.chat_id}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 rounded-xl hover:bg-slate-50 transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-blue-100"
            onClick={() => navigate(`/chat/${chat.chat_id}`)}
          >
            <MessageSquare
              size={16}
              className="text-slate-400 group-hover:text-blue-500 shrink-0 transition-colors"
            />
            <span className="truncate">{chat.title}</span>
          </button>
        ))}

        {/* Empty State Fallback */}
        {chats.length === 0 && (
          <div className="px-3 py-4 text-sm text-slate-400 italic">
            No recent chats
          </div>
        )}
      </div>
    </div>
  );
};
