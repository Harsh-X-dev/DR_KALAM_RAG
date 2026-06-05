// import React from 'react';
import { User, LogOut } from 'lucide-react';
import {useAuth} from '../../../auth/hooks/useAuth';

export default function Profile() {
  const {user, handleLogout} = useAuth();
  return (
    // The 'group' class on this relative container allows us to trigger 
    // the dropdown visibility when hovering anywhere over this wrapper.
    <div className ="flex items-center gap-3" > 
  <p className="text-md font-medium text-[var(--color-text-secondary)]">Welcome, {user?.name}</p>
    <div className="relative group inline-block">
    
      {/* Profile Icon (The Trigger) */}
      <button className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2">
        { user?.name?.[0]?.toUpperCase() || <User size={16} />}
      </button>

      {/* Dropdown Modal */}
      {/* Invisible/opacity-0 by default, becomes visible on group-hover */}
      <div className="absolute right-0 top-full mt-2 w-56 bg-[var(--color-surface-card)] rounded-xl shadow-lg border border-[var(--color-border-subtle)] invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
        
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
            onClick={() => handleLogout()}
            >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
        
        {/* Invisible bridge to prevent hover gap */}
        <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
      </div>
      
    </div>
            </div>
  );
}