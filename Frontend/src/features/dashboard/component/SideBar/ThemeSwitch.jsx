import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../../../context/ThemeContext.jsx";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="p-6 mx-auto border-t border-[var(--color-border-subtle)] flex items-center justify-start text-sm text-[var(--color-text-secondary)] select-none">
      {/* Fixed-width slot for 'Light' */}
      <span
        className={`w-12 text-center font-medium transition-opacity duration-200 ${isDark ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        Light
      </span>

      {/* Light Mode Icon */}
      <Sun
        className={`w-5 h-5 shrink-0 transition-colors ${!isDark ? "text-teal-600" : "text-[var(--color-text-muted)]"}`}
      />

      {/* Toggle Track */}
      <div
        onClick={toggleTheme}
        className={`w-10 h-6 mx-2 rounded-full p-1 flex items-center cursor-pointer border transition-colors duration-300 shrink-0 ${
          isDark
            ? "bg-slate-700 border-slate-600"
            : "bg-teal-50 border-teal-500/20"
        }`}
      >
        {/* Sliding Dot */}
        <div
          className={`w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${
            isDark ? "bg-white translate-x-4" : "bg-teal-600 translate-x-0"
          }`}
        />
      </div>

      {/* Dark Mode Icon */}
      <Moon
        className={`w-4 h-4 shrink-0 transition-colors ${isDark ? "text-teal-400" : "text-[var(--color-text-muted)]"}`}
      />

      {/* Fixed-width slot for 'Dark' */}
      <span
        className={`w-12 text-center font-medium transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        Dark
      </span>
    </div>
  );
};
