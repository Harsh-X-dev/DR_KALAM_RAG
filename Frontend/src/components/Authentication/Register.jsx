// import React from 'react'
import register from '../../assets/register.png'
import logo from '../../assets/logo.png'

export const Register = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center font-sans bg-[#F1F1E9] bg-cover bg-bottom bg-no-repeat relative"
      style={{ 
        backgroundImage: `url(${register})`, // <-- ADD YOUR IMAGE PATH HERE
        backgroundPosition: "left bottom",
        backgroundSize: "70%" // Adjust based on your asset size
      }}
    >
      {/* Container for content (Exact same structure as Login) */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-8 px-6 py-1 z-10">
        
        {/* LEFT COLUMN: Text Content (Dark text for light theme) */}
        <div className="flex-1 flex flex-col justify-center text-[#0f172a] pb-32 lg:pb-0">
          
          {/* Quote Section */}
          <div className="mb-16">
            <span className="text-5xl font-serif font-bold text-[#1a56db]/20 leading-none">
              “
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug mt-2 mb-4">
              Excellence is a continuous <br className="hidden sm:block" />
              process and not an accident.
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] italic font-medium">
              – Dr. A. P. J. Abdul Kalam
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#eff4ff] border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Create Your Account</h3>
                <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
                  Join thousands of learners and seekers of inspiration.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#eff4ff] border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Personalized Experience</h3>
                <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
                  Save chats, bookmarks and your favorite content.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#eff4ff] border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Learn & Grow</h3>
                <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
                  Make learning a habit and inspire others.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Register Card */}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 w-full max-w-md shadow-2xl">
            
            {/* Header / Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                   <img src={logo} alt="Logo Placeholder" className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-bold tracking-wider text-[#0f172a]">
                    DR KALAM
                  </span>
                  <span className="text-base font-bold text-[#1a56db]">
                    RAG Chat
                  </span>
                </div>
              </div>
              <h2 className="text-[22px] font-bold text-[#0f172a] mb-1">Create Your Account</h2>
              <p className="text-[#64748b] text-sm">Start your journey with Dr. Kalam's wisdom.</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-[#0f172a] mb-1.5">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder-gray-400"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-bold text-[#0f172a] mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder-gray-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-[#0f172a] mb-1.5">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Create a password" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder-gray-400"
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>
                </div>
              </div>

         

              {/* Checkbox */}
              <div className="pt-2 flex items-center justify-between text-sm">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0f4ed4] focus:ring-[#0f4ed4]" />
                  <span className="text-[#475569] font-medium text-xs sm:text-sm">
                    I agree to the <a href="#terms" className="text-[#1a56db] hover:underline">Terms of Use</a> and <a href="#privacy" className="text-[#1a56db] hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button 
                type="submit" 
                className="w-full bg-[#0f4ed4] hover:bg-[#1a56db] text-white font-medium py-3.5 rounded-xl transition-colors mt-2 shadow-sm"
              >
                Register
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-[#64748b] text-sm">or sign up with</span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 py-2.5 rounded-xl transition-colors text-sm font-bold text-[#334155]">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 py-2.5 rounded-xl transition-colors text-sm font-bold text-[#334155]">
                <svg className="w-4 h-4" viewBox="0 0 21 21">
                  <path fill="#f25022" d="M1 1h9v9H1z"/>
                  <path fill="#00a4ef" d="M1 11h9v9H1z"/>
                  <path fill="#7fba00" d="M11 1h9v9h-9z"/>
                  <path fill="#ffb900" d="M11 11h9v9h-9z"/>
                </svg>
                Microsoft
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm">
              <span className="text-[#0f172a] font-medium">Already have an account? </span>
              <a href="#login" className="text-[#1a56db] font-bold hover:underline">Login</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
