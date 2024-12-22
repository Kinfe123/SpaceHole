import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import { Faq } from "@/components/Faq";
import FUIBentoGridDark from "@/components/FeatureAsBento";
import Footer, { Footer2 } from "@/components/Footer";
import { FUIDarkHeroSection, FUIHeroWithJelly } from "@/components/Hero";
import FUIPricingWithSpecialTwo from "@/components/Pricing";
import { SecondaryFeatures } from "@/components/SecodaryFeature";
import FUITestimonialWithSlide from "@/components/Testimonial";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Header } from "@/components/ui/Header";
import { navItems } from "@/data";
import Head from "next/head";
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="bg-black-100  relative flex gap-8 justify-center items-center flex-col w-screen overflow-clip mx-auto s">
        <FUIDarkHeroSection />
        <div className="max-w-7xl m:px-10 px-5 w-full">
          <FUIBentoGridDark />
        </div>
        <div className="w-full">
          <SecondaryFeatures />
        </div>
        <FUITestimonialWithSlide />

        <div className="max-w-7xl w-full m:px-10 px-5">
          <FUIPricingWithSpecialTwo />
          <Approach />
          <Faq />
          <Footer2 />
          {/* <Footer /> */}
        </div>
      </main>
    </div>
  );
}
