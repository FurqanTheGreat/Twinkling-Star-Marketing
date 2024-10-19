'use client';
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import { LinkPreview } from "@/components/ui/link-preview";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Profile", href: "/profile" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Activity", href: "/activity" },
    { name: "Analytics", href: "/analytics" },
    { name: "System", href: "/system" },
    { name: "Deployments", href: "/deployments" },
    { name: "My Settings", href: "/settings" },
    { name: "Team Settings", href: "/team-settings" },
    { name: "Help & Feedback", href: "/help" },
    { name: "Log Out", href: "/logout" },
  ];

  return (
    <Navbar className={montserrat.className} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="justify-center sm:justify-start">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
      <NavbarItem>
          <Link href="/" className={pathname === "/" ? "font-semibold text-danger" : "text-black"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/gallery" className={pathname === "/gallery" ? "font-semibold text-danger" : "text-black"}>
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about-us" className={pathname === "/about-us" ? "font-semibold text-danger" : "text-black"}>
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LinkPreview className={pathname === "/framer" ? "font-semibold text-danger" : "text-black"} url="https://framer.com/motion">
            Framer Motion
          </LinkPreview>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              className={`w-full ${pathname === item.href ? "font-semibold text-danger" : "text-black"}`}
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
