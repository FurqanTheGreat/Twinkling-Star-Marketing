"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { div } from "framer-motion/client";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import { LinkPreview } from "@/components/ui/link-preview";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify the weights you need
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Specify the weights you need
});

const words = [
  {
    text: "Welcome",
  },
  {
    text: "To",
  },
  {
    text: "Twinkling",
  },
  {
    text: "Star.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function NavbarDemo() {
  return (
    <div className={montserrat.className}>
      <p className=" bg-black font-medium text-center text-[10px] text-white p-2 tracking-[1px] md:text-[15px]"> Welcome To Twinkling Star Guest House</p>
    <div className="relative w-full flex items-center justify-center">
      <Navbar className=" top-0 " />
    </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("absolute top-0 inset-x-0 mx-auto z-50 font-bold", className)}
    >
      <Menu setActive={setActive}>
        <div className=" w-1/4 flex justify-center">
        <Link href="/">
      <Image src="/logo.png"
            alt="logo" 
            width={150}
            height={150}
            className=" cursor-pointer "
            />
        </Link>
        </div>
        <div className=" w-3/4 flex justify-around">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={
          <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>}>
        </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
