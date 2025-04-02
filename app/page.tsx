"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[#f7f7f7]"> {/* Apply mild background color */}
      {/* Background Color (mild) */}
      <div className="absolute inset-0 bg-[#f7f7f7] -z-10"></div> {/* Apply mild background color */}
      
      {/* Main Content */}
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
