// import React from 'react';
import { User, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    // The 'group' class on this relative container allows us to trigger 
    // the dropdown visibility when hovering anywhere over this wrapper.
    <div className="relative group inline-block">
      
      {/* Profile Icon (The Trigger) */}
      <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <User size={20} strokeWidth={2.5} />
      </button>

      {/* Dropdown Modal */}
      {/* Invisible/opacity-0 by default, becomes visible on group-hover */}
      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
        
        <div className="p-4 border-b border-slate-100">
          <p className="text-sm font-bold text-slate-900 truncate">
            Harsh Saini
          </p>
          <p className="text-xs text-slate-500 truncate mt-0.5">
            harsh.saini@example.com
          </p>
        </div>

        <div className="p-2">
          <button 
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-rose-50 hover:text-rose-600 transition-colors text-left"
            onClick={() => console.log('Logout clicked')}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
        
        {/* Invisible bridge to prevent hover gap */}
        {/* This stops the menu from closing if the mouse moves through the gap between the button and the menu */}
        <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
      </div>
      
    </div>
  );
}