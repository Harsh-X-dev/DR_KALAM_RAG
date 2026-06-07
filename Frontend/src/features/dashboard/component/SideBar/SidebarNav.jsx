// import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { MessageCircle, Info, Database } from "lucide-react";
import { useContext } from "react";
import { ChatContext } from "../../../chat/chatContext.jsx";

export const SidebarNav = ({ onNavClick }) => {
  const navigate = useNavigate();
  const { setMessage } = useContext(ChatContext);

  const getNavStyle = ({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-sm ${
      isActive
        ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]"
        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-raised)]"
    }`;

  const handleNewChat = (e) => {
    e.preventDefault();
    setMessage([]);
    navigate("/chat");
    onNavClick?.();
  };

  return (
    <nav className="shrink-0 p-4 space-y-2">
      <NavLink
        to="/chat"
        end
        className={getNavStyle}
        onClick={handleNewChat}
      >
        <MessageCircle className="w-5 h-5" />
        New Chat
      </NavLink>

      <NavLink to="/about" className={getNavStyle} onClick={onNavClick}>
        <Info className="w-5 h-5" />
        About
      </NavLink>

      <NavLink to="/knowledge-base" className={getNavStyle} onClick={onNavClick}>
        <Database className="w-5 h-5" />
        Knowledge Base
      </NavLink>
    </nav>
  );
};
