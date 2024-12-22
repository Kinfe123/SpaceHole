"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideNavTabs = () => {
  return (
    <div className="bg-transparent text-white fixed top-5 left-0 right-0 mx-auto z-30 ">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 backdrop-blur-sm  border-white/5 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  px-5 py-2 text-sm text-gray-200"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  );
};
// @ts-ignore
const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        // @ts-ignore
        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          // @ts-ignore
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2 md:text-base"
    >
      {children}
    </li>
  );
};
// @ts-ignore
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-hero-gradient  md:h-10 "
    />
  );
};
export function Header() {
  return (
    <header className="bg-transparent">
      <SlideNavTabs />
    </header>
  );
}
