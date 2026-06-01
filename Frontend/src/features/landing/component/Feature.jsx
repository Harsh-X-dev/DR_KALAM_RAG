import {BookOpen, Mic, FileText, Users} from 'lucide-react';
export const Feature = () => {
  const cards = [
    {
      title: 'Books',
      stat: '35+',
      description: 'Read and learn from his books and manuscripts.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'Speeches',
      stat: '45+',
      description: 'Explore his memorable speeches and talks.',
      icon: <Mic className="w-6 h-6" />,
    },
    {
      title: 'Articles',
      stat: '25+',
      description: 'Dive into his insightful articles and writings.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: 'Interviews',
      stat: '15+',
      description: 'Learn from his interviews and interactions.',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section
    id="knowledge" 
    className="bg-[#fafbfc] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0f172a] tracking-tight mb-3">
            Knowledge 
          </h2>
          <p className="text-[#475569] text-sm sm:text-base max-w-xl mx-auto">
            Explore the vast knowledge base of Dr. A. P. J. Abdul Kalam through his books, speeches, articles, and interviews.
          </p>
        </div>
         

        {/* 4-Column Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-start transition-all duration-200 hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#1a56db] flex items-center justify-center mb-5">
                {card.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-base font-bold text-[#0f172a] mb-1.5">
                {card.title}
              </h3>
              <span className="text-lg font-bold text-[#1a56db] mb-4">
                {card.stat}
              </span>
              <p className="text-xs text-[#64748b] leading-relaxed max-w-[200px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Banner Section */}
        <div className="max-w-5xl mx-auto bg-[#eff4ff]/60 rounded-2xl p-8 md:p-10 relative flex items-start gap-4">
          {/* Stylized Quote Mark */}
          <span className="text-5xl font-serif font-bold text-[#1a56db]/30 select-none leading-none mt-1">
            “
          </span>
          
          {/* Quote Text & Author */}
          <div className="flex-1 flex flex-col items-center text-center pr-6">
            <p className="text-[#1e3a8a] font-semibold text-lg md:text-xl leading-relaxed max-w-3xl mb-4">
              Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.
            </p>
            <span className="text-xs font-medium text-[#475569] tracking-wide">
              — Dr. A. P. J. Abdul Kalam
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};