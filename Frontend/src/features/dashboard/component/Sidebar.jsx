import { useEffect, useState } from "react";
import { AppName } from "./SideBar/AppName.jsx";
import { RecentChats } from "./SideBar/RecentChat.jsx";
import { SidebarNav } from "./SideBar/SidebarNav.jsx";
import { ThemeSwitch } from "./SideBar/ThemeSwitch.jsx";
import { getChats } from "../../chat/api/chatApi.js";
import { useChat } from "../../chat/hooks/useChat.js";

export const Sidebar = ({ isOpen, onClose }) => {
  const { message } = useChat();
  const [userRecentChats, setUserRecentChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const chats = await getChats();
      setUserRecentChats(chats.data);
    };
    fetchChats();
  }, [message]);

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40
        w-[280px] bg-[var(--color-surface)] border-r border-[var(--color-border)]
        flex flex-col h-full shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.08)]
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:z-auto md:shadow-[4px_0_24px_rgba(0,0,0,0.04)]
        transition-colors duration-200
      `}
      aria-label="Sidebar navigation"
    >
      <AppName onClose={onClose} />
      <SidebarNav onNavClick={onClose} />
      <div className="px-6">
        <div className="h-px bg-[var(--color-border-subtle)] w-full"></div>
      </div>
      <RecentChats chats={userRecentChats} onChatClick={onClose} />
      <ThemeSwitch />
    </aside>
  );
};

