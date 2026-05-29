export const ChatInput = () => (
  <div className="p-6 bg-[#f8fafc]">
    <div className="max-w-4xl mx-auto relative flex items-center">
      <input
        type="text"
        placeholder="Ask anything about Dr. A. P. J. Abdul Kalam..."
        className="w-full bg-white border border-gray-200 text-[#0f172a] px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1a56db]/20 focus:border-[#1a56db] shadow-[0_2px_12px_rgba(0,0,0,0.04)] pr-16 text-[15px]"
      />
      <button className="absolute right-3 w-10 h-10 bg-[#1a56db] text-white rounded-full flex items-center justify-center hover:bg-[#0f4ed4] transition-colors shadow-sm">
        <svg
          className="w-4 h-4 ml-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </button>
    </div>
    <div className="text-center mt-3">
      <p className="text-[11px] text-[#94a3b8]">
        DR KALAM RAG Cha can make mistakes. Please verify important information.
      </p>
    </div>
  </div>
);
