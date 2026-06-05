import { UserPlus, Bookmark, BookOpen, User, Eye } from "lucide-react";
import logo from "../../../assets/logo.png";
import register from "../../../assets/register.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Loading } from "../../../component/Loading";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { handleRegister, user, loading } = useAuth();
  if (loading) {
    return <Loading fullScreen={true} size={15} />;
  }
  if (user) {
    return <Navigate to="/chat" replace />;
  }
  return (
    <div
      // Added py-12 for mobile scrolling clearance
      className="min-h-screen w-full flex items-center justify-center font-sans bg-[#F1F1E9] bg-cover bg-bottom bg-no-repeat relative py-12 lg:py-0"
      style={{
        backgroundImage: `url(${register})`,
        backgroundPosition: "left bottom",
        backgroundSize: "70%",
      }}
    >
      {/* Changed to flex-col-reverse so the form is on top for mobile users */}
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row gap-16 lg:gap-8 px-6 py-1 z-10">
        {/* LEFT COLUMN: Text Content (Dark text for light theme) */}
        {/* Added text-center lg:text-left for better mobile reading */}
        <div className="flex-1 flex flex-col justify-center text-[#0f172a] pb-10 lg:pb-0 text-center lg:text-left">
          {/* Quote Section */}
          <div className="mb-10 lg:mb-16">
            <span className="text-5xl font-serif font-bold text-[#1a56db]/20 leading-none">
              “
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug mt-2 mb-4">
              Excellence is a continuous <br className="hidden lg:block" />
              process and not an accident.
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] italic font-medium">
              – Dr. A. P. J. Abdul Kalam
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 text-left max-w-sm lg:max-w-none">
              <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0">
                <UserPlus className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Create Your Account</h3>
                <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
                  Join thousands of learners and seekers of inspiration.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 text-left max-w-sm lg:max-w-none">
              <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0">
                <Bookmark className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  Personalized Experience
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
                  Save chats, bookmarks and your favorite content.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 text-left max-w-sm lg:max-w-none">
              <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />
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
          <div className="bg-[var(--color-surface-card)] rounded-[2rem] p-8 sm:p-10 w-full max-w-md shadow-2xl">
            {/* Header / Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 overflow-hidden rounded-full border border-[var(--color-border)] flex items-center justify-center shrink-0">
                  <img
                    src={logo}
                    alt="Logo Placeholder"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-bold tracking-wider text-[var(--color-text-primary)]">
                    DR KALAM
                  </span>
                  <span className="text-base font-bold text-[var(--color-accent)]">
                    RAG Chat
                  </span>
                </div>
              </div>
              <h2 className="text-[22px] font-bold text-[var(--color-text-primary)] mb-1">
                Create Your Account
              </h2>
              <p className="text-[var(--color-text-muted)] text-sm">
                Start your journey with Dr. Kalam's wisdom.
              </p>
            </div>

            {/* Form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister(formData);
              }}
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-primary)] mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-input-ring)] focus:border-[var(--color-accent)] transition-all text-sm placeholder:text-[var(--color-text-muted)]"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                    <User className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-primary)] mb-1.5">
                  Email Address
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-input-ring)] focus:border-[var(--color-accent)] transition-all text-sm placeholder:text-[var(--color-text-muted)]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-primary)] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-input-ring)] focus:border-[var(--color-accent)] transition-all text-sm placeholder:text-[var(--color-text-muted)]"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              {/* <div className="pt-2 flex items-center justify-between text-sm">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0f4ed4] focus:ring-[#0f4ed4]" />
                  <span className="text-[#475569] font-medium text-xs sm:text-sm">
                    I agree to the <a href="#terms" className="text-[#1a56db] hover:underline">Terms of Use</a> and <a href="#privacy" className="text-[#1a56db] hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div> */}

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-[var(--color-accent-hover)] hover:bg-[var(--color-accent)] text-white font-medium py-3.5 rounded-xl transition-colors mt-2 shadow-sm"
              >
                Register
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center text-sm">
              <span className="text-[var(--color-text-primary)] font-medium">
                Already have an account?{" "}
              </span>
              <Link
                to="/login"
                className="text-[var(--color-accent)] font-bold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
