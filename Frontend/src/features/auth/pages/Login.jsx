import { useState } from "react";
import { Lightbulb, ShieldCheck, BookOpen, Eye } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import login from "../../../assets/login.png";
import logo from "../../../assets/logo.png";
import { useAuth } from "../hooks/useAuth";
import { Loading } from "../../../component/Loading.jsx";
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, user, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  if (loading) {
    return <Loading fullScreen={false} size={15} />;
  }

  if (user) {
    return <Navigate to="/chat" replace />;
  }
  return (
    <div
      // Added py-12 for mobile so the content doesn't hit the absolute edges if it scrolls
      className="min-h-screen w-full flex items-center justify-center font-sans bg-[#0f2a6a] bg-cover bg-bottom bg-no-repeat relative py-12 lg:py-0"
      style={{ backgroundImage: `url(${login})` }}
    >
      {/* CRITICAL FIX: Changed 'flex-col' to 'flex-col-reverse'. 
        This puts the Login Form on top on mobile, and the Text on bottom. 
        'lg:flex-row' ensures it stays side-by-side on desktop.
      */}
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row gap-16 lg:gap-8 px-6 z-10">
        {/* LEFT COLUMN: Text Content (Appears at bottom on mobile, left on desktop) */}
        <div className="flex-1 flex flex-col justify-center text-white text-center lg:text-left">
          {/* Quote Section */}
          <div className="mb-10 lg:mb-16">
            <span className="text-5xl font-serif font-bold text-white/40 leading-none">
              “
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium leading-snug mt-2 mb-4">
              You have to dream before <br className="hidden lg:block" />
              your dreams can come true.
            </h2>
            <p className="text-sm sm:text-base text-blue-200/80 italic">
              – Dr. A. P. J. Abdul Kalam
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 text-left max-w-sm lg:max-w-none">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-blue-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">AI Powered</h3>
                <p className="text-sm text-blue-200/80 leading-relaxed max-w-xs">
                  Advanced RAG technology for accurate and contextual answers.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 text-left max-w-sm lg:max-w-none">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Trusted & Secure</h3>
                <p className="text-sm text-blue-200/80 leading-relaxed max-w-xs">
                  Your data is safe with us. We value your privacy.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 text-left max-w-sm lg:max-w-none">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-blue-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Knowledge Hub</h3>
                <p className="text-sm text-blue-200/80 leading-relaxed max-w-xs">
                  Access Dr. Kalam's books, speeches, articles and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Login Card (Appears at top on mobile, right on desktop) */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 w-full max-w-md shadow-2xl">
            {/* Header / Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                  <img
                    src={logo}
                    alt="Logo"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-bold tracking-wider text-[#0b1b42]">
                    DR KALAM
                  </span>
                  <span className="text-base font-bold text-[#1a56db]">
                    RAG Chat
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#0b1b42] mb-2">
                Welcome Back! 👋
              </h2>
              <p className="text-[#64748b] text-sm">
                Login to continue your journey.
              </p>
            </div>

            {/* Form */}
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(email, password);
              }}
            >
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-2">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder-gray-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder-gray-400"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Extras */}
              {/* <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-[#1a56db] focus:ring-[#1a56db]"
                  />
                  <span className="text-[#475569] font-medium">
                    Remember me
                  </span>
                </label>
                <a
                  href="#forgot"
                  className="text-[#1a56db] font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div> */}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#0f4ed4] hover:bg-[#1a56db] text-white font-medium py-3.5 rounded-xl transition-colors mt-2 shadow-sm"
              >
                Login
              </button>
            </form>

        
          

            {/* Footer */}
            <div className="mt-8 text-center text-sm">
              <span className="text-[#64748b]">Don't have an account? </span>
              <Link
                to="/register"
                className="text-[#1a56db] font-semibold hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
