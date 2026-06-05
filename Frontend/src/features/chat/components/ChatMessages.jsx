import logo from "../../../assets/logo.png";
import ReactMarkdown from "react-markdown";
import { Loading } from "../../../component/Loading.jsx";
import { useChat }from "../hooks/useChat.js";
export const SystemMessage = ({ text, sources }) => {
  const { loading } = useChat();
  return (
    <div className="flex items-start gap-4 mb-8 w-full">
      {/* System Avatar */}
      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 mt-1 bg-white">
        <img src={logo} alt="System" className="rounded-full opacity-80" />
      </div>

      {/* System Message Content */}
      <div>
        <div className="text-[15px] text-[#334155] leading-relaxed mb-4">
          {text ? (
            <ReactMarkdown>{text}</ReactMarkdown>
          ) : ( loading  && <Loading fullScreen={false} size={10} />)}
        </div>

        {/* Sources Divs */}
        {sources && sources.length > 0 && (
          <div className="flex flex-col gap-2 border border-gray-200 p-4 rounded-xl bg-[#f1f5f9]">
            <span className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
              Sources
            </span>
            <div className="flex flex-wrap gap-2">
              {sources.map((source, index) => (
                <span
                  key={source.id || index} // Better to use a unique ID if available
                  className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-[11px] font-medium text-[#1a56db] cursor-pointer hover:bg-blue-100 hover:border-blue-200 transition-all duration-200"
                >
                  {source.name || source}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const UserMessage = ({ text }) => (
  <div className="flex justify-end mb-8 w-full">
    <div className="bg-[#1a56db] text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
      <p className="text-[15px] leading-relaxed">{text}</p>
    </div>
  </div>
);
