// // import React from 'react'

// export const Feature = () => {
//   return (
//     <div>Feature</div>
//   )
// }


// import React from 'react';

export const Feature = () => {
  const cards = [
    {
      title: 'Books',
      stat: '35+',
      description: 'Read and learn from his books and manuscripts.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
    },
    {
      title: 'Speeches',
      stat: '45+',
      description: 'Explore his memorable speeches and talks.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
      ),
    },
    {
      title: 'Articles',
      stat: '25+',
      description: 'Dive into his insightful articles and writings.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
    },
    {
      title: 'Interviews',
      stat: '15+',
      description: 'Learn from his interviews and interactions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#fafbfc] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0f172a] tracking-tight mb-3">
            Explore. Learn. Grow.
          </h2>
          <p className="text-[#475569] text-sm sm:text-base max-w-xl mx-auto">
            Discover a world of knowledge and inspiration from Dr. Kalam's life and works.
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

