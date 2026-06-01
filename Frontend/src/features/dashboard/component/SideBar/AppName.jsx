import logo from "../../../../assets/logo.png";

export const AppName = () => (
  <div className="flex items-center gap-3 p-6 pb-4 border-b border-gray-100">
    <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center shrink-0 bg-blue-50">
      {/* Placeholder for Dr. Kalam sketch */}
      <img
        src={logo}
        alt="Logo"
        className="object-cover w-full h-full opacity-70"
      />
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-[11px] font-bold tracking-wider text-[#0f172a]">
        DR KALAM
      </span>
      <span className="text-base font-bold text-[#1a56db]">RAG Chat</span>
    </div>
  </div>
);
