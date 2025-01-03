"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import GridGlobe from "./ui/GridGlobe";
export default function FUIBentoGridDark() {
  return (
    <div className="pt-12 ">
      <h1 className="font-geistMono tracking-tight text-3xl md:text-5xl">
        Sales
      </h1>
      <p className="max-w-3xl text-xl font-medium tracking-tight mt-2 bg-gradient-to-br from-black/90 to-black/80 bg-clip-text text-transparent dark:from-white dark:to-white/40">
        Know more about your customers than they do.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="PerkAI uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div>
              <img src={"/grid.svg"} />
              <img
                src={
                  "https://framerusercontent.com/images/mS28QhWcSped7JSQ7vltnisa5c8.png?scale-down-to=1024"
                }
                className="scale-100 -mt-40 ml-20 w-[90%] h-[90%] hidden md:block ml-auto"
              />
            </div>
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] object-fill" />
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="-mt-20">
              <GridGlobe />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={
            <div>
              <img src={"/grid.svg"} />
              <img
                src={"https://usman-babakura.vercel.app/mainIconsdark.svg"}
                className="scale-100 -mt-20 w-[90%] h-[90%] hidden md:block ml-auto"
              />
            </div>
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Code Quality"
          description="PerkAI helps you sell in locations currently under international embargo."
          graphic={
            <div>
              <img src={"/grid.svg"} />
              <img
                src={"/b5.svg"}
                className="scale-100 -mt-20 w-[90%] h-[90%] hidden md:block ml-auto"
              />
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </div>
  );
}
export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]   shadow-sm ring-1 ring-black/5",
        "data-[dark]:bg-gray-800 data-[dark]:ring-white/15",
      )}
    >
      <div className="relative h-[29rem] shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25" />
        )}
      </div>
      <div className="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl">
        <h1>{eyebrow}</h1>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-950 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 dark:text-gray-300 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
