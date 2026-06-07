import { Feature, Footer, Hero, Navbar } from "../component/index.js";

export const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      {/* pt-[72px] offsets the fixed Navbar main bar height (py-4 + logo ~40px) */}
      <main className="flex-grow pt-[72px]">
        <Hero />
        <Feature />
      </main>
      <Footer />
    </div>
  );
};



