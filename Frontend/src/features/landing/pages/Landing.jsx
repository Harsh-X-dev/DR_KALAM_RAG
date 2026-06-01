import { Feature, Footer, Hero, Navbar } from "../component/index.js";

export const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      {/* Added pt-20 here to push content down below the fixed Navbar */}
      <main className="flex-grow pt-20">
        <Hero />
        <Feature />
      </main>
      <Footer />
    </div>
  );
};


