import logo from "../../../assets/logo.png";

export const SystemMessage = ({ text, sources }) => (
  <div className="flex items-start gap-4 mb-8 w-full">
    {/* System Avatar */}
    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 mt-1 bg-white">
      <img
        src={logo}
        alt="System"
        className="rounded-full opacity-80"
      />
    </div>

    {/* System Message Content */}
    <div className="bg-white border border-gray-200 px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%]">
      <p className="text-[15px] text-[#334155] leading-relaxed mb-4">{text}</p>

      {/* Sources Divs */}
      {sources && sources.length > 0 && (
        <div className="flex flex-col gap-2 border-t border-gray-100 pt-3">
          <span className="text-xs font-semibold text-[#64748b]">Sources</span>
          <div className="flex flex-wrap gap-2">
            {sources.map((source, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-[11px] font-medium text-[#1a56db] cursor-pointer hover:bg-blue-100 transition-colors"
              >
                {source}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);