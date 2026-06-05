import {
  Calendar,
  Rocket,
  Landmark,
  Heart,
  Home,
  GraduationCap,
  Star,
  Users,
  BookOpen,
  Lightbulb,
  User,
  MapPin,
  Briefcase,
  Clock,
  Quote,
} from "lucide-react";
import about from "../../../assets/about.png";

export const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-[var(--color-surface-raised)]">
      <div className="p-6 md:p-8 font-sans text-[var(--color-text-primary)]">
        {/* Hero Section */}
        <div
          className="border border-[var(--color-border-subtle)] rounded-2xl p-8 mb-10 flex flex-col-reverse lg:flex-row items-center gap-8 relative overflow-hidden"
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark mode overlay so text stays readable over the background image */}
          <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/75 rounded-2xl pointer-events-none" />
          <div className="w-full lg:w-3/10 z-10">
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              About Dr. A. P. J. Abdul Kalam
            </h1>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 text-base">
              Dr. Avul Pakir Jainulabdeen Abdul Kalam (1931–2015) was a
              visionary scientist, teacher, and statesman who inspired millions
              with his simplicity, humility, and unwavering commitment to
              India's progress.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-1">
                  <Calendar size={16} />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  15 Oct 1931
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-tight">
                  Born in Rameswaram, Tamil Nadu
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-1">
                  <Rocket size={16} />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Aerospace Scientist
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-tight">
                  Key leader in India's space & missile programs
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-1">
                  <Landmark size={16} />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  11th President of India
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-tight">
                  Served from 2002 to 2007
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-1">
                  <Heart size={16} />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Teacher & Mentor
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-tight">
                  Inspiration to millions of young minds
                </p>
              </div>
            </div>
          </div>

          {/* Large Image Placeholder
          <div className="w-full lg:w-2/5 flex justify-end h-64 lg:h-80">
            <img src={about} alt="About Dr. Kalam" className="w-full h-auto rounded-xl object-cover shadow-md" />
          </div>
          */}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Wider) */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Life Journey Section */}
            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-8">
                Life Journey
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-5 left-8 right-8 h-[2px] bg-teal-100 dark:bg-teal-900/30 z-0"></div>

                <div className="flex justify-between gap-4">
                  {/* 1931 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 border-2 border-[var(--color-surface)] shadow-sm flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                      <Home size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400 mb-2">
                      1931
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-tight">
                      Born on 15 October 1931 in Rameswaram, Tamil Nadu.
                    </p>
                  </div>

                  {/* 1954 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border-2 border-[var(--color-surface)] shadow-sm flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                      <GraduationCap size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400 mb-2">
                      1954
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-tight">
                      Graduated in Physics from St. Joseph's College,
                      Tiruchirappalli.
                    </p>
                  </div>

                  {/* 1960s-1990s */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 border-2 border-[var(--color-surface)] shadow-sm flex items-center justify-center text-orange-500 dark:text-orange-400 mb-4">
                      <Rocket size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400 mb-2">
                      1960s–1990s
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-tight">
                      Played a key role in ISRO and DRDO projects including
                      SLV-III and Agni missiles.
                    </p>
                  </div>

                  {/* 2002 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 border-2 border-[var(--color-surface)] shadow-sm flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                      <Landmark size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400 mb-2">
                      2002
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-tight">
                      Elected as the 11th President of India.
                    </p>
                  </div>

                  {/* 2015 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-pink-50 dark:bg-pink-900/30 border-2 border-[var(--color-surface)] shadow-sm flex items-center justify-center text-pink-500 dark:text-pink-400 mb-4">
                      <Heart size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400 mb-2">
                      2015
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-tight">
                      Left for his heavenly abode on 27 July 2015 while
                      inspiring students.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* His Legacy Section */}
            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                His Legacy
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed max-w-3xl">
                Dr. Kalam believed in the power of dreams and the potential of
                youth. He dedicated his life to nation building, education, and
                creating a developed India. His words continue to guide and
                motivate generations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl bg-[var(--color-surface-card)] shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className="text-teal-600 dark:text-teal-400" />
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400">
                      Visionary Leader
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Dreamed of a developed and self-reliant India.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl bg-[var(--color-surface-card)] shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-teal-600 dark:text-teal-400" />
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400">
                      People's President
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Loved and respected by people of all ages.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl bg-[var(--color-surface-card)] shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-teal-600 dark:text-teal-400" />
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400">Author</h4>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Wrote many inspiring books like Wings of Fire.
                  </p>
                </div>
                {/* Card 4 */}
                <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl bg-[var(--color-surface-card)] shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={16} className="text-teal-600 dark:text-teal-400" />
                    <h4 className="text-sm font-bold text-teal-600 dark:text-teal-400">
                      Youth Inspiration
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    His teachings continue to empower young minds.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Narrower) */}
          <div className="flex flex-col gap-6">
            {/* At a Glance Card */}
            <div className="p-6 border border-[var(--color-border-subtle)] rounded-xl bg-[var(--color-surface-card)] shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
                At a Glance
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <User size={14} className="mr-2" />
                    <span>Full Name</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    Avul Pakir Jainulabdeen Abdul Kalam
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <Calendar size={14} className="mr-2" />
                    <span>Born</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    15 October 1931
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <MapPin size={14} className="mr-2" />
                    <span>Birthplace</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    Rameswaram, Tamil Nadu
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <Briefcase size={14} className="mr-2" />
                    <span>Profession</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    Scientist, Teacher, Statesman
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <Star size={14} className="mr-2" />
                    <span>Known For</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    Missile Man of India
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <Landmark size={14} className="mr-2" />
                    <span>President Term</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    2002 – 2007
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-[var(--color-text-muted)]">
                    <Clock size={14} className="mr-2" />
                    <span>Passed Away</span>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    27 July 2015
                  </span>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 border border-[var(--color-border-subtle)] rounded-xl bg-[var(--color-surface-card)] shadow-sm flex flex-col justify-between">
              <div>
                <Quote
                  size={28}
                  className="text-teal-200 dark:text-teal-700 fill-teal-50 dark:fill-teal-900/30 mb-2 transform -scale-x-100"
                />
                <p className="text-sm italic text-[var(--color-text-secondary)] leading-relaxed">
                  Dream, dream, dream.
                  <br />
                  Dreams transform into thoughts and thoughts result in action.
                </p>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <span className="text-xs text-[var(--color-text-muted)] font-medium">
                  — Dr. A. P. J. Abdul Kalam
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-[var(--color-text-muted)] pb-8">
          <Heart size={12} className="text-teal-400 fill-teal-400 dark:text-teal-300 dark:fill-teal-300" />
          <p>
            Let us carry forward his vision and work towards a better tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};
