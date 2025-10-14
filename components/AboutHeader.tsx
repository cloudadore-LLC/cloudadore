"use client";
import {
  Facebook,
  Instagram,
  Mail,
  MenuIcon,
  Phone,
  Twitter,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";

const MenuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Merch Store", href: "/merchstore" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Get Involved", href: "/getinvolved" },
  { name: "Contact Us", href: "/contact" },
];

const AboutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  return (
    <div>
      <section className="hidden lg:flex justify-between text-sm p-2 bg-[#08568A] text-white">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" /> +234-8101234567
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" /> info@cloudadore.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>Follow us:</span>
          <Facebook className="w-4 h-4 cursor-pointer" />
          <Twitter className="w-4 h-4 cursor-pointer" />
          <Instagram className="w-4 h-4 cursor-pointer" />
        </div>
      </section>
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold text-blue-900">
          <Link href="/">
            <Image
              src="/Logo (1).svg"
              alt="brandlogo"
              width={120}
              height={40}
            />
          </Link>
        </h1>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          {MenuItems.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-blue-700 font-semibold border-b-2 border-blue-700"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className=" hidden lg:flex items-center gap-2">
          <Button className="outline outline-[#EB842B] text-[#EB842B] bg-white cursor-pointer">
            Donate
          </Button>
          <Button className="bg-[#08568A] text-white cursor-pointer  ">
            Join Community
          </Button>
        </div>
        {/* Mobile and Tablet Menu Button */}
        <div className="lg:hidden block z-50">
          {isOpen ? (
            <button
              onClick={toggleMenu}
              className="relative z-50 p-2"
              aria-label="Close menu"
            >
              <XIcon className="w-6 h-6 text-black bg-white" />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="relative z-50 p-2"
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6 text-black bg-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
