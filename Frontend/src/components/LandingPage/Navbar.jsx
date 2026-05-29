// import React from 'react'
import logo from '../../assets/logo.png'
export const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full px-8 py-4 bg-[#fafbfc] border-b border-gray-100 font-sans">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 cursor-pointer">
        {/* Placeholder for the sketch image */}
        <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-200 bg-white flex items-center justify-center">
          <img 
            src={logo} 
            alt="Dr Kalam Sketch" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-bold text-[#0d1b2a] tracking-wide">
            DR KALAM
          </span>
          <span className="text-lg font-bold text-[#1a56db]">
            RAG Chat
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#334155]">
        <a 
          href="#home" 
          className="text-[#1a56db] border-b-2 border-[#1a56db] pb-1 hover:opacity-80 transition-opacity"
        >
          Home
        </a>
        <a href="#features" className="hover:text-[#1a56db] transition-colors pb-1">
          Features
        </a>
        <a href="#about" className="hover:text-[#1a56db] transition-colors pb-1">
          About Dr. Kalam
        </a>
        <a href="#how-it-works" className="hover:text-[#1a56db] transition-colors pb-1">
          How it Works
        </a>
        <a href="#testimonials" className="hover:text-[#1a56db] transition-colors pb-1">
          Testimonials
        </a>
      </nav>

      {/* Call to Action Button */}
      <div className="flex items-center">
        <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition-colors duration-200">
          Get Started
        </button>
      </div>
      
    </header>
  )
}
