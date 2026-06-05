import { Outlet } from "react-router-dom";
import { Header } from "../component/Header.jsx";
// import { ChatBox } from "../components/Dashboard/ChatBox.jsx";
import { Sidebar } from "../component/Sidebar.jsx";
// import { About } from "../components/Dashboard/About";
// import { KnowledgeBase } from "../components/Dashboard/KnowledgeBase";

export const Dashboard = () => {
  return (
    <div className="flex h-screen w-full bg-[var(--color-surface-raised)] font-sans overflow-hidden text-[var(--color-text-primary)] transition-colors duration-200">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 relative">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
