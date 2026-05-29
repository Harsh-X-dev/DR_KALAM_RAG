import Profile from "./Header/Profile";

export const Header = () => (
  <header className="h-[72px] bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
    <div className="flex flex-col">
      <h1 className="text-lg font-bold text-[#0f172a]">DR KALAM RAG Cha</h1>
      <span className="text-xs text-[#64748b]">
        Ask, Learn and be Inspired.
      </span>
    </div>
   <Profile/>
  </header>
);
