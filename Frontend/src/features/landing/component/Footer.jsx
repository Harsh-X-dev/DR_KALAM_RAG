import { User } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0b162c] text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Footer Content */}
        
        {/* Logo area */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-600 bg-white/10 flex items-center justify-center shrink-0">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-xs font-bold tracking-wide">
              DR KALAM
            </span>
            <span className="text-base font-bold">
              RAG Chat
            </span>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="flex flex-col items-center gap-3 mb-10 max-w-xl">
          <p className="text-[#94a3b8] text-[14px] leading-relaxed">
            Built with <span className="text-red-500">❤️</span> to spread the wisdom and vision of Dr. A. P. J. Abdul Kalam.
          </p>
          
          {/* Subtle horizontal divider */}
          <div className="w-12 h-px bg-gray-700 my-1"></div>
          
          {/* New informational lines (No links) */}
          <p className="text-[#94a3b8] text-[14px] leading-relaxed">
            An intelligent retrieval system designed to provide accurate, context-aware insights drawn from Dr. Kalam's extensive body of work. Our mission is to leverage technology to keep his transformative legacy accessible to future generations of learners and dreamers.
          </p>
        </div>

        {/* Bottom Copyright Section */}
        <div className="w-full border-t border-[#1e293b] pt-6 flex justify-center">
          <p className="text-[12px] text-[#94a3b8]">
            © 2026 DR KALAM RAG Chat. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};