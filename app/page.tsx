import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Link from "next/link";
import NavbarDemo from "./ui/navbar";
import ImagesSliderDemo from "./ui/images-slider";
import { Poppins } from 'next/font/google';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ThreeDCardDemo } from "./ui/3d-card";
import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Metadata } from "next";
import DatePicker from "./ui/date-range-picker";
import CardDemo from "./ui/card";
import Dropdown from "./ui/dropdown";
import Dropdown1 from "./ui/dropdown1";
import Dropdown2 from "./ui/dropdown2";

export const metadata: Metadata = {
  title: 'Home | Twinkling Star Guest House',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the weights you need
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the weights you need
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '900', '700'], // Specify the weights you need
});

// Add a new document with a generated ID

export default function App() {
  return (
    <>
    <ImagesSliderDemo />
    <CardDemo>
    <DatePicker />
    <Dropdown />
    <Dropdown1 />
    <Dropdown2 />
    </CardDemo>
    <AuroraBackground>
        <div>
        <div className="text-danger text-left text-4xl">
          ★★★★★
        </div>
        <br />
        <div className={`text-2xl md:text-4xl font-medium dark:text-white text-left ${merriweather.className}`}>
          Twinkling Star Guest House
        </div>
        <div className={`font-light text-base md:text-[20px] text-left dark:text-neutral-200 py-4 hidden lg:block ${montserrat.className}`}>
        Welcome to Twinkling Star, where comfort meets convenience. Nestled in the heart of Karachi, our guest house offers a cozy and serene environment that makes every stay feel like home. Whether you are here for a relaxing getaway or a short business trip, our attention to detail ensures a memorable experience. <br /> <br />
        Founded by Muhammad Afzal, Twinkling Star began with a simple vision: to provide warm, personalized hospitality to every guest. We take pride in offering clean, spacious rooms with modern amenities, ensuring our guests have everything they need to relax and unwind. <br /> <br />
        At Twinkling Star, we believe in treating every guest as part of our extended family. Our friendly staff is always ready to assist you, ensuring your stay is comfortable, safe, and enjoyable. <br /> <br />
        Come experience the perfect blend of homely warmth and professional service. Whether it is your first time staying with us or you are a returning guest, we look forward to welcoming you to Twinkling Star. <br /> <br />
        </div>
        <div className={`font-light text-base md:text-[20px] text-left dark:text-neutral-200 py-4 lg:hidden ${montserrat.className}`}>
        Welcome to Twinkling Star, where comfort meets convenience. Nestled in the heart of Karachi, our guest house offers a cozy and serene environment that makes every stay feel like home. Whether you are here for a relaxing getaway or a short business trip, our attention to detail ensures a memorable experience. <br /> <br />
        Founded by Muhammad Afzal, Twinkling Star began with a simple vision: to provide warm, personalized hospitality to every guest. We take pride in offering clean, spacious rooms with modern amenities, ensuring our guests have everything they need to relax and unwind. <br />
        </div>
        <Link href="/about-us" >
        <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px] text-[15px] relative group transition duration-200 text-white hover:bg-transparent">
    Learn More →
  </div>
</button>
        </Link>
        </div> <br /> 
        <ThreeDCardDemo />
    </AuroraBackground>
    </>
  );
}
