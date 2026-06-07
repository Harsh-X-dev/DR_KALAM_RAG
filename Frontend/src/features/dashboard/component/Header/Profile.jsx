import { useRef, useState, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../../../auth/hooks/useAuth';

export default function Profile() {
  const { user, handleLogout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Welcome text — hidden on small screens */}
      <p className="hidden sm:block text-sm font-medium text-[var(--color-text-secondary)] truncate max-w-[120px] md:max-w-[180px]">
        Welcome, {user?.name}
      </p>

      <div className="relative" ref={ref}>
        {/* Profile button */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="User menu"
          aria-expanded={open}
          className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
        >
          {user?.name?.[0]?.toUpperCase() || <User size={16} />}
        </button>

        {/* Dropdown — click/tap driven */}
        {open && (
          <div className="absolute right-0 top-full mt-2 w-52 bg-[var(--color-surface-card)] rounded-xl shadow-lg border border-[var(--color-border-subtle)] z-50">
            <div className="p-4 border-b border-[var(--color-border-subtle)]">
              <p className="text-sm font-bold text-[var(--color-text-primary)] truncate">
                {user?.name}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] truncate mt-0.5">
                {user?.email}
              </p>
            </div>

            <div className="p-2">
              <button
                className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] rounded-lg hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/20 transition-colors text-left"
                onClick={() => { handleLogout(); setOpen(false); }}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}