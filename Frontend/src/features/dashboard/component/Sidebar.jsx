import { useEffect, useState } from "react";
import { AppName } from "./SideBar/AppName.jsx";
import { RecentChats } from "./SideBar/RecentChat.jsx";
import { SidebarNav } from "./SideBar/SidebarNav.jsx";
import { ThemeSwitch } from "./SideBar/ThemeSwitch.jsx";
import { getChats } from "../../chat/api/chatApi.js";
import { useChat } from "../../chat/hooks/useChat.js";
export const Sidebar = () => {
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
    <div className="w-[280px] bg-[var(--color-surface)] border-r border-[var(--color-border)] flex flex-col h-full shrink-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.04)] transition-colors duration-200">
      <AppName />
      <SidebarNav />
      <div className="px-6">
        <div className="h-px bg-[var(--color-border-subtle)] w-full"></div>
      </div>
      <RecentChats chats={userRecentChats} />

      <ThemeSwitch />
    </div>
  );
};
