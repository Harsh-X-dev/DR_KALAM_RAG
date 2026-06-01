// 4. Sidebar Div Container
import { AppName } from "./SideBar/AppName.jsx";
import { RecentChats } from "./SideBar/RecentChat.jsx";
import { SidebarNav } from "./SideBar/SidebarNav.jsx";
import { ThemeSwitch } from "./SideBar/ThemeSwitch.jsx";
export const Sidebar = () => {

  const userRecentChats = [
    { id: '1', title: 'What did Dr. Kalam say about dreams?' },
    { id: '2', title: 'Vision for India 2020 summary' },
    { id: '3', title: 'His role in ISRO and SLV-III' },
    { id: '4', title: 'Youth empowerment speeches' },
  ];
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
}
