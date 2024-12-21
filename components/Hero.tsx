"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
  const words = [
    {
      text: "I",
    },
    {
      text: "Build",
    },
    {
      text: "High-performance",
    },
    {
      text: "Web",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Applications",
      className: "text-purple dark:text-purple",
    },
  ];

  return (
    <div id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
          fill="white"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20-z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TypewriterEffect
            className="text-center md:text-5xl lg:text-6xl my-5"
            words={words}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Akash, a Web Developer, Open Source and AI Enthusiast.
          </p>

          <a href="#projects" className="cursor-pointer">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import clsx from "clsx";

export function FUIDarkHeroSection() {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <div className="relative max-w-[100rem] min-h-screen">
      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      <Spotlight
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
        fill="white"
      />
      <Container className="relative md:max-w-[100rem]  flex justify-between w-full gap-5 py-20 sm:pb-24 sm:pt-36">
        <img
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
          className="absolute z-2 -top-0 left-10 opacity-30"
        />

        <div className="mr-auto max-w-2xl mt-20 lg:max-w-3xl lg:px-3">
          <h1 className="font-geist text-5xl font-normal  tracking-tighter  bg-gradient-to-r from-zinc-100 via-stone-200/80 to-purple-200/80 bg-clip-text  text-transparent sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span>A design agency -{" "}
            <br /> for a businesses side.
          </h1>
          <div className="mt-6 space-y-6 font-geist text-md sm:text-xl tracking-tight text-gray-500">
            <p>
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union.
            </p>
            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
          </div>
          <div className="border-[1.2px]  rounded-lg mt-4 w-fit border-white/10 p-1">
            <button className=" w-full md:w-52 font-geist tracking-tighter text-center rounded-lg text-md bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2">
              Get Started
            </button>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Speakers", "18"],
              ["People Attending", "2,091"],
              ["Venue", "Staples Center"],
              ["Location", "Los Angeles"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-gray-300">{name}</dt>
                <dd className="mt-0.5 text-2xl font-normal font-geist tracking-tight text-gray-300">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="">
          <img src={"/grid.svg"} />
          <img
            src={"https://usman-babakura.vercel.app/mainIconsdark.svg"}
            className="scale-100 -mt-20 w-[90%] h-[90%] hidden md:block ml-auto"
          />
        </div>
      </Container>
    </div>
  );
}

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export function FUIHeroWithJelly() {
  return (
    <section className="relative min-h-screen dark:text-white">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        src="/blackhole.webm"
        className="overflow-hidden w absolute -top-96 w-screen mt-[-40px]"
      /> */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      <Spotlight
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
        fill="white"
      />
      <div className="px-4 mx-auto sm:px-6 md:px-0">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y
              text-center  sm:max-w-xl md:max-w-xl  lg:max-w-3xl text-5xl md:text-5xl tracking-tighter mx-auto lg:text-7xl font-bold font-geist text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1 z-20
              dark:border-none  max-w-3xl [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.),transparent)1] "
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Manage your sales and analytics in one place.
              <br className="max-lg:hidden" />
              looking for
            </h1>
            <div className="relative mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Simple is a modern website builder powered by AI that changes
                how companies create user interfaces together.
              </p>
              {/* <div
                className="absolute left-0 top-0 h-80 w-[90%] opacity-60 overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-40 blur-[337.4px]"
                style={{ transform: "rotate(-30deg)" }}
              /> */}
              <div className="relative before:absolute before:inset-0 before:border-y dark:before:border-none before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto z-20 max-w-xs mt-[-20px] mb-[20px] sm:flex sm:justify-center items-center sm:max-w-none gap-5"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Link
                    href="https://farmui.com/templates/ease"
                    className="group inline-flex text-lg gap-x-2 mt-2 backdrop-blur-md text-white justify-center items-center py-3 px-5 ml-3 w-fit rounded-xl border duration-200 group bg-page-gradient border-white/30 text-md font-geistSans hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100"
                  >
                    Explore More
                    <div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
                      <FiArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
                      <FiArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}

          <div className="relative">
            <div className="absolute top-0 right-0 left-0 mx-auto mt-12 max-w-6xl border-white/10">
              <img
                src="https://framerusercontent.com/images/jvlcne0ABTxg7RFwM1Ra0R1p47E.png?scale-down-to=1024"
                className="w-full rounded-3xl shadow-lg border-white/10"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
