import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/logo.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", active: true },
    { href: "#features", label: "Features" },
    { href: "#knowledge", label: "Knowledge" },
  ];

  return (
    <header className="fixed z-50 w-full bg-[#fafbfc] border-b border-gray-100 font-sans">
      {/* Main bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0">
            <img src={logo} alt="Dr Kalam Sketch" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-bold text-[#0d1b2a] tracking-wide">DR KALAM</span>
            <span className="text-lg font-bold text-[var(--color-accent)]">RAG Chat</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#334155]">
          {navLinks.map(({ href, label, active }) => (
            <a
              key={label}
              href={href}
              className={
                active
                  ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)] pb-1 hover:opacity-80 transition-opacity"
                  : "hover:text-[var(--color-accent)] transition-colors pb-1"
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-sm transition-colors duration-200"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#334155] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#fafbfc] border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label, active }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                active
                  ? "text-[var(--color-accent)] bg-teal-50"
                  : "text-[#334155] hover:text-[var(--color-accent)] hover:bg-gray-50"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

