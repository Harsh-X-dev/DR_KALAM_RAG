// import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, Info, Database } from 'lucide-react';

export const SidebarNav = () => {
  // Function to dynamically apply the active/inactive Tailwind classes
  const getNavStyle = ({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-sm ${
      isActive
        ? 'bg-[#eff4ff] text-[#1a56db]'       // Active state (Blue)
        : 'text-[#475569] hover:bg-gray-50'   // Inactive state (Gray)
    }`;

  return (
    <nav className="shrink-0 p-4 space-y-2">
      
      {/* Added 'end' prop so it only matches exactly at /dashboard */}
      <NavLink to="/chat" end className={getNavStyle}>
        <MessageCircle className="w-5 h-5" />
        New Chat
      </NavLink>

      <NavLink to="/about" className={getNavStyle}>
        <Info className="w-5 h-5" />
        About
      </NavLink>

      <NavLink to="/knowledge-base" className={getNavStyle}>
        <Database className="w-5 h-5" />
        Knowledge Base
      </NavLink>

    </nav>
  );
};