"use client";
import { motion } from "motion/react"
import Image from "next/image";
import { body, div } from "framer-motion/client";
import { IconContext } from "react-icons";
import { FaArrowCircleRight, FaNewspaper, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div>
      {/* nav bar */}
      <Image src="/logo.svg" alt="icon" className="relative absolute top-5 left-5" width={40} height={40} />
      <div className="navbar font-bold text-1xl sm:text-2xl text-white w-full h-15 flex justify-center gap-10">
        <button className="cursor-pointer"><h1>About</h1></button>
        <button className="cursor-pointer"><h1>Home</h1></button>
        <button className="cursor-pointer"><h1>Contact</h1></button>
        <button className="cursor-pointer"><h1>Newsletter</h1></button>
      </div>
      {/* main content */}
      <div className=""></div>
    </div>
  );
}