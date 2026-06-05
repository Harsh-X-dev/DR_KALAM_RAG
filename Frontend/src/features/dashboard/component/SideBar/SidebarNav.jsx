// import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { MessageCircle, Info, Database } from "lucide-react";
import { useContext } from "react";
import { ChatContext } from "../../../chat/chatContext.jsx";

export const SidebarNav = () => {
  const navigate = useNavigate();
  const { setMessage } = useContext(ChatContext);
  // Function to dynamically apply the active/inactive Tailwind classes
  const getNavStyle = ({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-sm ${
      isActive
        ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]" // Active — Teal
        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-raised)]" // Inactive
    }`;

  return (
    <nav className="shrink-0 p-4 space-y-2">
      {/* Added 'end' prop so it only matches exactly at /dashboard */}
      <NavLink
        to="/chat"
        end
        className={getNavStyle}
        onClick={(e) => {
          e.preventDefault();
          setMessage([]);
          navigate("/chat");
        }}
      >
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
