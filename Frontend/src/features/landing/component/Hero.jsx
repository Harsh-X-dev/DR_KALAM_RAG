import hero from "../../../assets/hero.png";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="bg-[#fafbfc] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Hero Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content Area */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Your AI Companion for Knowledge & Inspiration
            </div>

            {/* Main Heading */}
            <h1 className="text-[3.5rem] leading-[1.1] font-bold text-[#0f172a] mb-6 tracking-tight">
              Ask. Learn. <br />
              <span className="text-[var(--color-accent)]">Be Inspired.</span>
            </h1>

            {/* Description */}
            <p className="text-[#475569] text-lg leading-relaxed mb-8 max-w-md">
              DR KALAM RAG Chat is an AI assistant that brings the timeless
              wisdom, ideas, and values of Dr. A. P. J. Abdul Kalam closer to
              you.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white px-6 py-3.5 rounded-xl font-medium transition-colors shadow-sm"
                onClick={() => navigate("/login")}
              >
                Start Chatting Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Placeholder Area */}
          <div className="relative w-full h-[500px] bg-teal-50/50 rounded-2xl flex items-center justify-center">
            <img
              src={hero}
              alt="Hero Image"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
        <div id="features"></div>
        <div className="text-center mt-16 mb-14 ">
          <h2 className="text-3xl font-bold text-[#0f172a] tracking-tight mb-3">
            Features
          </h2>
          <p className="text-[#475569] text-sm sm:text-base max-w-xl mx-auto">
            Discover the powerful features that make DR KALAM RAG Chat your
            ultimate AI companion for learning and inspiration.
          </p>
        </div>
        {/* Bottom Feature Cards */}
        <div className=" bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-1">
                  Accurate Answers
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Get reliable answers from Dr. Kalam's authentic resources.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-1">
                  Inspired by Wisdom
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Explore his teachings, quotes, and life lessons.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-1">
                  Trusted Sources
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Answers grounded in books, speeches, interviews and articles.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-1">
                  Always With You
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Your 24/7 AI companion for learning and inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
