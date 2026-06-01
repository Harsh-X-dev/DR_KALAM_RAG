import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="p-6 mx-auto border-t border-gray-100 flex items-center justify-start text-sm text-slate-600 select-none">
      {/* Fixed-width slot for 'Light' */}
      <span
        className={`w-12 text-center font-medium transition-opacity duration-200 ${isDark ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        Light
      </span>

      {/* Light Mode Icon */}
      <Sun
        className={`w-5 h-5 shrink-0 transition-colors ${!isDark ? "text-blue-600" : "text-slate-400"}`}
      />

      {/* Toggle UI */}
      <div
        onClick={() => setIsDark(!isDark)}
        className={`w-10 h-6 mx-2 rounded-full p-1 flex items-center cursor-pointer border transition-colors duration-300 shrink-0 ${
          isDark
            ? "bg-slate-700 border-slate-600"
            : "bg-[#eff4ff] border-[#1a56db]/20"
        }`}
      >
        {/* Sliding Inner Circle */}
        <div
          className={`w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${
            isDark ? "bg-white translate-x-4" : "bg-[#1a56db] translate-x-0"
          }`}
        ></div>
      </div>

      {/* Dark Mode Icon */}
      <Moon
        className={`w-4 h-4 shrink-0 transition-colors ${!isDark ? "text-slate-400" : "text-slate-800"}`}
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
