import logo from "../../../../assets/logo.png";

export const AppName = () => (
  <div className="flex items-center gap-3 p-6 pb-4 border-b border-[var(--color-border-subtle)]">
    <div className="w-10 h-10 overflow-hidden rounded-full border border-[var(--color-border)] flex items-center justify-center shrink-0 bg-teal-50 dark:bg-teal-900/30">
      {/* Placeholder for Dr. Kalam sketch */}
      <img
        src={logo}
        alt="Logo"
        className="object-cover w-full h-full opacity-70"
      />
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-[11px] font-bold tracking-wider text-[var(--color-text-primary)]">
        DR KALAM
      </span>
      <span className="text-base font-bold text-[var(--color-accent)]">RAG Chat</span>
    </div>
  </div>
);
