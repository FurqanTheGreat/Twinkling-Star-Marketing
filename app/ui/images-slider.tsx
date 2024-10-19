"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Raleway } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

export default function ImagesSliderDemo() {
  const images = [
    "/image-1.jpg",
    "/image-5.jpg",
    "/image.jpg",
  ];
  return (
    <ImagesSlider className="h-[35rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <div className={`text-[24px] md:text-[40px] font-semibold dark:text-white text-center mb-[20px] ${playfairDisplay.className}`}>
            Welcome To
          </div>
        <div className="text-[27px] md:text-[60px] font-bold dark:text-white text-center mb-6">
          Twinkling Star Guest House
        </div>
        <div className={`font-light text-base md:text-[30px] dark:text-neutral-200 py-4 ${playfairDisplay.className}`}>
        Your Home Away from Home – Comfort, Hospitality, and Tranquility Await. <br /> <br />
        <Highlight className="text-black dark:text-white hidden text-[15px] md:text-[25px] lg:text-[30px]">
        Experience Comfort and Serenity in the Heart of Karachi.
        </Highlight>
        </div>
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
