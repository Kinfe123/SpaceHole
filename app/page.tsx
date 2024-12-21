import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import FUIBentoGridDark from "@/components/FeatureAsBento";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero, { FUIDarkHeroSection, FUIHeroWithJelly } from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { SecondaryFeatures } from "@/components/SecodaryFeature";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Header } from "@/components/ui/Header";
import { navItems } from "@/data";
import Head from "next/head";
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="bg-black-100 relative flex justify-center items-center flex-col w-screen overflow-clip mx-auto sm:px-10 px-5">
        <FUIDarkHeroSection />
        <div className="max-w-7xl w-full">
          <FUIBentoGridDark />
          <SecondaryFeatures />
          {/* <Client /> */}
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </div>
  );
}
