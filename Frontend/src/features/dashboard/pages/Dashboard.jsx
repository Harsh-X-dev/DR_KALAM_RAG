import { Outlet } from "react-router-dom";
import { Header } from "../component/Header.jsx";
import { Sidebar } from "../component/Sidebar.jsx";
import { useState, useCallback } from "react";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((o) => !o), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="flex h-dvh w-full bg-[var(--color-surface-raised)] font-sans overflow-x-hidden text-[var(--color-text-primary)] transition-colors duration-200">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className="flex-1 flex flex-col min-w-0 relative overflow-hidden">
        <Header onMenuToggle={toggleSidebar} />
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
