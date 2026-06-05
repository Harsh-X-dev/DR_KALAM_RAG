import Profile from "./Header/Profile";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const data = {
    chat: "DR KALAM RAG Chat",
    about: "About",
    "knowledge-base": "Knowledge Base",
  };

  return (
    <header className="h-[72px] bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-border)] flex items-center justify-between px-8 sticky top-0 z-10 transition-colors duration-200">
      <div className="flex flex-col">
        <h1 className="text-lg font-medium text-[var(--color-text-primary)]">{data[path]}</h1>
      </div>
      <Profile />
    </header>
  );
};
