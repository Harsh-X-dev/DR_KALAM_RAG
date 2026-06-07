import Profile from "./Header/Profile";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

export const Header = ({ onMenuToggle }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const data = {
    chat: "DR KALAM RAG Chat",
    about: "About",
    "knowledge-base": "Knowledge Base",
  };

  return (
    <header className="min-h-[64px] bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-border)] flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 transition-colors duration-200">
      <div className="flex items-center gap-3">
        {/* Hamburger — only visible on mobile */}
        <button
          onClick={onMenuToggle}
          aria-label="Open navigation menu"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-raised)] transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-base md:text-lg font-medium text-[var(--color-text-primary)] truncate max-w-[160px] sm:max-w-none">
          {data[path]}
        </h1>
      </div>
      <Profile />
    </header>
  );
};

