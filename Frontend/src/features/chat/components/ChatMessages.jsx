import logo from "../../../assets/logo.png";
import ReactMarkdown from "react-markdown";
import { Loading } from "../../../component/Loading.jsx";
import { useChat }from "../hooks/useChat.js";
export const SystemMessage = ({ text, sources }) => {
  const { loading } = useChat();
  return (
    <div className="flex items-start gap-4 mb-8 w-full">
      {/* System Avatar */}
      <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center shrink-0 mt-1 bg-[var(--color-surface-card)]">
        <img src={logo} alt="System" className="rounded-full opacity-80" />
      </div>

      {/* System Message Content */}
      <div>
        <div className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {text ? (
            <ReactMarkdown>{text}</ReactMarkdown>
          ) : ( loading  && <Loading fullScreen={false} size={10} />)}
        </div>

        {/* Sources Divs */}
        {sources && sources.length > 0 && (
          <div className="flex flex-col gap-2 border border-[var(--color-border)] p-4 rounded-xl bg-[var(--color-surface-raised)]">
            <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
              Sources
            </span>
            <div className="flex flex-wrap gap-2">
              {sources.map((source, index) => (
                <span
                  key={source.id || index} // Better to use a unique ID if available
                  className="inline-flex items-center px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-[11px] font-medium text-teal-700 dark:text-teal-300 cursor-pointer hover:bg-teal-100 dark:hover:bg-teal-800/40 hover:border-teal-300 transition-all duration-200"
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
    <div className="bg-[var(--color-accent)] text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
      <p className="text-[15px] leading-relaxed">{text}</p>
    </div>
  </div>
);
