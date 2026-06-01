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
  if (loading) {
    return <Loading />;
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
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder-gray-400"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Extras */}
              <div className="flex items-center justify-between text-sm">
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
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#0f4ed4] hover:bg-[#1a56db] text-white font-medium py-3.5 rounded-xl transition-colors mt-2 shadow-sm"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-[#64748b] text-sm whitespace-nowrap">
                or continue with
              </span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 py-2.5 rounded-xl transition-colors text-sm font-semibold text-[#334155]">
                {/* Google Brand Icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>

              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 py-2.5 rounded-xl transition-colors text-sm font-semibold text-[#334155]">
                {/* Microsoft Brand Icon */}
                <svg className="w-4 h-4" viewBox="0 0 21 21">
                  <path fill="#f25022" d="M1 1h9v9H1z" />
                  <path fill="#00a4ef" d="M1 11h9v9H1z" />
                  <path fill="#7fba00" d="M11 1h9v9h-9z" />
                  <path fill="#ffb900" d="M11 11h9v9h-9z" />
                </svg>
                Microsoft
              </button>
            </div>

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
