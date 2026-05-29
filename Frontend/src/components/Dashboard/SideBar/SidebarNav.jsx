// import React from 'react';
import { MessageCircle, Info, Database } from 'lucide-react';

export const SidebarNav = () => (
  <nav className="flex-0 p-4 space-y-2">
    
    <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#eff4ff] text-[#1a56db] rounded-xl font-medium transition-colors text-sm">
      <MessageCircle className="w-5 h-5" />
      New Chat
    </button>
    
    <button className="w-full flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-gray-50 rounded-xl font-medium transition-colors text-sm">
      <Info className="w-5 h-5" />
      About
    </button>
    
    <button className="w-full flex items-center gap-3 px-4 py-3 text-[#475569] hover:bg-gray-50 rounded-xl font-medium transition-colors text-sm">
      <Database className="w-5 h-5" />
      Knowledge Base
    </button>
    
  </nav>
);