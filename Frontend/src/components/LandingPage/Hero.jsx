// import React from 'react'
import hero from '../../assets/hero.png'

export const Hero = () => {
  return (
    <section className="bg-[#fafbfc] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Hero Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content Area */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eff4ff] text-[#1a56db] text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
              Your AI Companion for Knowledge & Inspiration
            </div>

            {/* Main Heading */}
            <h1 className="text-[3.5rem] leading-[1.1] font-bold text-[#0f172a] mb-6 tracking-tight">
              Ask. Learn. <br />
              <span className="text-[#1a56db]">Be Inspired.</span>
            </h1>

            {/* Description */}
            <p className="text-[#475569] text-lg leading-relaxed mb-8 max-w-md">
              DR KALAM RAG Chat is an AI assistant that brings the timeless wisdom, ideas, and values of Dr. A. P. J. Abdul Kalam closer to you.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 bg-[#0f4ed4] hover:bg-[#1a56db] text-white px-6 py-3.5 rounded-xl font-medium transition-colors shadow-sm">
                Start Chatting Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              
              <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-[#334155] px-6 py-3.5 rounded-xl font-medium transition-colors shadow-sm">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Explore Knowledge
              </button>
            </div>
          </div>

          {/* Right Image Placeholder Area */}
          <div className="relative w-full h-[500px] bg-blue-50/50 rounded-2xl flex items-center justify-center">
            <img src={hero} alt="Hero Image" className="object-cover w-full h-full rounded-2xl" />
          </div>

        </div>

        {/* Bottom Feature Cards */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#eff4ff] text-[#1a56db] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#0f172a] text-sm mb-1">Accurate Answers</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">Get reliable answers from Dr. Kalam's authentic resources.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#eff4ff] text-[#1a56db] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#0f172a] text-sm mb-1">Inspired by Wisdom</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">Explore his teachings, quotes, and life lessons.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#eff4ff] text-[#1a56db] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#0f172a] text-sm mb-1">Trusted Sources</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">Answers grounded in books, speeches, interviews and articles.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#eff4ff] text-[#1a56db] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#0f172a] text-sm mb-1">Always With You</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">Your 24/7 AI companion for learning and inspiration.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
