"use client";
import { motion } from "motion/react"
import Image from "next/image";
import { body, div } from "framer-motion/client";
import { IconContext } from "react-icons";
import { FaArrowCircleRight, FaNewspaper, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* nav bar */}
      <Image src="/logo.svg" alt="icon" className="relative absolute top-5 left-5" width={40} height={40} />
      <div className="navbar font-medium text-white text-2xl w-full h-15 flex justify-center gap-10">
        <button className="cursor-pointer"><h1>About</h1></button>
        <button className="cursor-pointer"><h1>Home</h1></button>
        <button className="cursor-pointer"><h1>Contact</h1></button>
        <button className="cursor-pointer"><h1>Newsletter</h1></button>
      </div>
      {/* main content */}
      <div className="flex justify-center">
        <div className="flex gap-2 blocks p-10 w-full h-auto">
          <div className="p-10 justify-center items-center w-200 h-100 bg-gradient-to-br from-blue-950 from-10% to-stone-950 rounded-2xl relative">
            <h1 className="text-4xl text-white font-bold">Welcome! We are Artroller.</h1>
            <p className="text-xl mt-5 text-white font-medium"><span>We are a small team dedicated to making games accessible for everyone.</span>We have dedicated years into our designs to make the best rhythm-game controllers for you. With our newest collection you can enjoy a light weight device that is easy to set up, just plug and play! We took care of the rest.</p>
          </div>
          <div className="w-100 h-100 p-10 rounded-2xl bg-gradient-to-b from-blue-950 from-0% to-stone-950 relative">
            <h1 className="text-white text-4xl font-bold">Get immersed.</h1>
            <p className="text-white font-medium text-xl mt-5">Play your favorite rhythm games right out home with our newest collection of in-house made controllers.</p>
            <FaArrowCircleRight className="text-white absolute cursor-pointer size-12 bottom-4 right-4 hover:rotate-35 transition-all" />
          </div>
          <div className="w-150 p-10 h-100 rounded-2xl bg-gradient-to-bl from-blue-950 from-10% to-stone-950 relative">
            <h1 className="text-white text-4xl font-bold">Our newsletter.</h1>
            <p className="text-white font-medium text-xl mt-5">Here at <span className="font-bold italic">Artroller</span>, it is important to keep our valueable customers up to date. Keep up with our latest news!</p>
            <FaArrowCircleRight className="text-white absolute cursor-pointer size-12 bottom-4 right-4 hover:rotate-35 transition-all"/>
          </div>
        </div>
      </div>
      {/* hero */}
      <div className="p-10 w-full flex justify-center ">
        <div className="grid gap-5 grid-rows-[auto,auto,auto,auto,auto] w-200 text-center items-center">
          <h1 className="text-white font-bold text-6xl">The <span className="bg-gradient-to-l from-blue-500 from-60% to-white bg-clip-text text-transparent">ArtollerV2</span></h1>
          <p className="text-white font-medium text-2xl">Our latest controller with less latency and better LED lighting.</p>
          <div className="flex justify-center gap-5">
            <button className="w-auto cursor-pointer pl-5 pr-5 h-10 rounded-full text-white font-bold border-blue-500 bg-blue-500">Learn more</button>
            <button className="w-20 cursor-pointer h-10 rounded-full border-1 border-blue-500 text-white font-bold">Buy</button>
            {/* still needs product image */}
                <div>
    </div>
          </div>
        </div>
      </div>
      {/* marquee */}
      <div className="marquee-wrapper h-20">
  <span className="marquee text-2xl font-bold text-white">
    20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 
    20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 20% OFF WITH REFERRAL CODE "BTMC" 
  </span>
</div>
      {/* newsletter */}
      <div className="flex gap-2 blocks p-10 w-full h-auto">
          <div className="w-200 h-100 p-10 rounded-2xl bg-gradient-to-b from-blue-950 from-0% to-stone-950 relative">
            <h1 className="text-white text-4xl font-bold">Check out our newest controller!</h1>
            <p className="text-white font-medium text-xl mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque sed, itaque nam fugiat quos ut corrupti quae error ipsum, facere saepe! Error quo minima alias cumque sint explicabo consequuntur!</p>
          </div>
          <div className="p-10 justify-center items-center w-100 h-100 bg-gradient-to-br from-blue-950 from-10% to-stone-950 rounded-2xl relative">
            <h1 className="text-4xl text-white font-bold">Play at home with ease.</h1>
            <p className="text-xl mt-5 text-white font-medium">Look at some of the home setups our customers have built using our controllers!</p>
            <FaArrowCircleRight className="text-white absolute cursor-pointer size-12 bottom-4 right-4 hover:rotate-35 transition-all"/>
          </div>
          <div className="w-150 p-10 h-100 rounded-2xl bg-gradient-to-bl from-yellow-950 from-10% to-stone-950 relative">
            <p className="text-xl text-white opacity-50 italic">News</p>
            <h1 className="text-white text-4xl font-bold">We are officially partnering with BTMC!</h1>
            <p className="text-white font-medium text-xl mt-5">We are partnering with <span className="text-blue-500 font-bold">BTMC</span>, the imfamous Osu! Youtuber and former top player in the Osu! Community.</p>          </div>
          <div className="w-100 p-10 h-100 rounded-2xl bg-gradient-to-bl from-blue-950 from-10% to-stone-950 relative">
            <h1 className="text-white text-4xl font-bold">Our first launch!</h1>
            <p className="text-white font-medium text-xl mt-5">We have just launced our website! Thanks for supporting us.</p>
          </div>
        </div>
        {/* footer */}
        <div className="flex w-full justify-center text-white font-medium p-10">Benjamin van der Westen 2025</div>
    </div>
  );
}