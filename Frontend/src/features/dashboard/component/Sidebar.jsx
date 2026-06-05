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
    <div className="w-[280px] bg-white border-r border-gray-200 flex flex-col h-full shrink-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <AppName />
      <SidebarNav />
      <div className="px-6">
        <div className="h-px bg-slate-100 w-full"></div>
      </div>
      <RecentChats chats={userRecentChats} />

      <ThemeSwitch />
    </div>
  );
};
