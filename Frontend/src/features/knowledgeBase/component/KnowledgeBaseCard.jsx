// import React from 'react';
import { 
  Book, 
  Mic, 
  FileText, 
  Video, 
  Calendar, 
  Clock 
} from 'lucide-react';

export default function KnowledgeBaseCard({
  title,
  type,
  description,
  year,
  metaText,
  metaIconType = 'document', // 'document' or 'clock'
  theme = 'blue',            // 'blue', 'purple', 'green', 'orange', 'red', 'teal'
  mainIcon = 'book'          // 'book', 'mic', 'file', 'video'
}) {
  
  // 1. Dynamic Theme Configuration
  const themeConfig = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'text-blue-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'text-purple-500' },
    green: { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'text-emerald-500' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-500' },
    red: { bg: 'bg-rose-50', text: 'text-rose-600', icon: 'text-rose-500' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', icon: 'text-teal-500' },
  }[theme] || { bg: 'bg-slate-50', text: 'text-slate-600', icon: 'text-slate-500' };

  // 2. Dynamic Main Icon Selection
  const renderMainIcon = () => {
    const props = { size: 28, className: themeConfig.icon };
    switch (mainIcon) {
      case 'mic': return <Mic {...props} />;
      case 'file': return <FileText {...props} />;
      case 'video': return <Video {...props} />;
      case 'book':
      default: return <Book {...props} />;
    }
  };

  return (
    <div className="flex flex-col p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200 h-full w-full max-w-sm">
      
      {/* Top Section: Icon, Title, and Badge */}
      <div className="flex gap-4 mb-5">
        {/* Main Icon Box */}
        <div className={`w-16 h-20 rounded-xl flex items-center justify-center shrink-0 ${themeConfig.bg}`}>
          {renderMainIcon()}
        </div>

        {/* Title & Badge */}
        <div className="flex flex-col items-start pt-1">
          <h3 className="text-sm font-bold text-slate-900 leading-tight mb-2 line-clamp-2">
            {title}
          </h3>
          <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${themeConfig.bg} ${themeConfig.text}`}>
            {type}
          </span>
        </div>
      </div>

      {/* Middle Section: Description */}
      <p className="text-xs text-slate-500 leading-relaxed mb-8 flex-grow line-clamp-3">
        {description}
      </p>

      {/* Bottom Section: Metadata */}
      <div className="flex items-center gap-6 mt-auto pt-2">
        {/* Year */}
        <div className="flex items-center text-slate-400 gap-1.5">
          <Calendar size={14} />
          <span className="text-xs font-medium text-slate-500">{year}</span>
        </div>

        {/* Duration / Pages / Status */}
        <div className="flex items-center text-slate-400 gap-1.5">
          {metaIconType === 'clock' ? (
            <Clock size={14} />
          ) : (
            <FileText size={14} />
          )}
          <span className="text-xs font-medium text-slate-500">{metaText}</span>
        </div>
      </div>

    </div>
  );
}