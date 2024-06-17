"use client";
import Image from "next/image";

import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Chest from "./Components/Body/Chest";
import Services from "./Components/Services/Services";
import { motion, useScroll } from "framer-motion";
import "./styles.css";
import Experience from "./Components/Experience/Experience";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar fixed z-10 "
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />

      <div className="mx-8 md:mx-20">
        <Body />
        <Chest />
        <Services />
      </div>
      <div className="w-full bg-gray-200 ">
        <Experience />

      </div>

    </div>
  );
}
