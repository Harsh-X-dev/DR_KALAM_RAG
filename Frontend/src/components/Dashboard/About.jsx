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
import about from "../../assets/about.png";

export const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white">
      <div className="p-6 md:p-8 font-sans text-slate-800">
        {/* Hero Section */}
        <div
          className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-8 mb-10 flex flex-col-reverse lg:flex-row items-center gap-8 relative overflow-hidden"
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full lg:w-3/10 z-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              About Dr. A. P. J. Abdul Kalam
            </h1>
            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              Dr. Avul Pakir Jainulabdeen Abdul Kalam (1931–2015) was a
              visionary scientist, teacher, and statesman who inspired millions
              with his simplicity, humility, and unwavering commitment to
              India's progress.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
                  <Calendar size={16} />
                </div>
                <h3 className="text-sm font-bold text-slate-800">
                  15 Oct 1931
                </h3>
                <p className="text-xs text-slate-500 leading-tight">
                  Born in Rameswaram, Tamil Nadu
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
                  <Rocket size={16} />
                </div>
                <h3 className="text-sm font-bold text-slate-800">
                  Aerospace Scientist
                </h3>
                <p className="text-xs text-slate-500 leading-tight">
                  Key leader in India's space & missile programs
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
                  <Landmark size={16} />
                </div>
                <h3 className="text-sm font-bold text-slate-800">
                  11th President of India
                </h3>
                <p className="text-xs text-slate-500 leading-tight">
                  Served from 2002 to 2007
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
                  <Heart size={16} />
                </div>
                <h3 className="text-sm font-bold text-slate-800">
                  Teacher & Mentor
                </h3>
                <p className="text-xs text-slate-500 leading-tight">
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
              <h2 className="text-xl font-bold text-slate-900 mb-8">
                Life Journey
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-5 left-8 right-8 h-[2px] bg-blue-100 z-0"></div>

                <div className="flex justify-between gap-4">
                  {/* 1931 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-white shadow-sm flex items-center justify-center text-blue-500 mb-4">
                      <Home size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-blue-600 mb-2">
                      1931
                    </h4>
                    <p className="text-xs text-slate-600 leading-tight">
                      Born on 15 October 1931 in Rameswaram, Tamil Nadu.
                    </p>
                  </div>

                  {/* 1954 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 border-2 border-white shadow-sm flex items-center justify-center text-emerald-600 mb-4">
                      <GraduationCap size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-blue-600 mb-2">
                      1954
                    </h4>
                    <p className="text-xs text-slate-600 leading-tight">
                      Graduated in Physics from St. Joseph's College,
                      Tiruchirappalli.
                    </p>
                  </div>

                  {/* 1960s-1990s */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-orange-50 border-2 border-white shadow-sm flex items-center justify-center text-orange-500 mb-4">
                      <Rocket size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-blue-600 mb-2">
                      1960s–1990s
                    </h4>
                    <p className="text-xs text-slate-600 leading-tight">
                      Played a key role in ISRO and DRDO projects including
                      SLV-III and Agni missiles.
                    </p>
                  </div>

                  {/* 2002 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-purple-50 border-2 border-white shadow-sm flex items-center justify-center text-purple-600 mb-4">
                      <Landmark size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-blue-600 mb-2">
                      2002
                    </h4>
                    <p className="text-xs text-slate-600 leading-tight">
                      Elected as the 11th President of India.
                    </p>
                  </div>

                  {/* 2015 */}
                  <div className="flex flex-col items-center text-center w-1/5 z-10">
                    <div className="w-10 h-10 rounded-full bg-pink-50 border-2 border-white shadow-sm flex items-center justify-center text-pink-500 mb-4">
                      <Heart size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-blue-600 mb-2">
                      2015
                    </h4>
                    <p className="text-xs text-slate-600 leading-tight">
                      Left for his heavenly abode on 27 July 2015 while
                      inspiring students.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* His Legacy Section */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                His Legacy
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-3xl">
                Dr. Kalam believed in the power of dreams and the potential of
                youth. He dedicated his life to nation building, education, and
                creating a developed India. His words continue to guide and
                motivate generations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className="text-blue-500" />
                    <h4 className="text-sm font-bold text-blue-600">
                      Visionary Leader
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dreamed of a developed and self-reliant India.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-blue-500" />
                    <h4 className="text-sm font-bold text-blue-600">
                      People's President
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Loved and respected by people of all ages.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-blue-500" />
                    <h4 className="text-sm font-bold text-blue-600">Author</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wrote many inspiring books like Wings of Fire.
                  </p>
                </div>
                {/* Card 4 */}
                <div className="p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={16} className="text-blue-500" />
                    <h4 className="text-sm font-bold text-blue-600">
                      Youth Inspiration
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    His teachings continue to empower young minds.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Narrower) */}
          <div className="flex flex-col gap-6">
            {/* At a Glance Card */}
            <div className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                At a Glance
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <User size={14} className="mr-2" />
                    <span>Full Name</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Avul Pakir Jainulabdeen Abdul Kalam
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar size={14} className="mr-2" />
                    <span>Born</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    15 October 1931
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin size={14} className="mr-2" />
                    <span>Birthplace</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Rameswaram, Tamil Nadu
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <Briefcase size={14} className="mr-2" />
                    <span>Profession</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Scientist, Teacher, Statesman
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <Star size={14} className="mr-2" />
                    <span>Known For</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Missile Man of India
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <Landmark size={14} className="mr-2" />
                    <span>President Term</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    2002 – 2007
                  </span>
                </div>

                <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock size={14} className="mr-2" />
                    <span>Passed Away</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    27 July 2015
                  </span>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm flex flex-col justify-between">
              <div>
                <Quote
                  size={28}
                  className="text-blue-200 fill-blue-50 mb-2 transform -scale-x-100"
                />
                <p className="text-sm italic text-slate-700 leading-relaxed">
                  Dream, dream, dream.
                  <br />
                  Dreams transform into thoughts and thoughts result in action.
                </p>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  — Dr. A. P. J. Abdul Kalam
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-slate-400 pb-8">
          <Heart size={12} className="text-blue-400 fill-blue-400" />
          <p>
            Let us carry forward his vision and work towards a better tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};
