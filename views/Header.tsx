"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import CartPage from "@/app/cart/page";
// import { useAppSelector } from "@/lib/hooks";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  //  const cartItems = useAppSelector((state) => state.cart.items)
  // const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Merch Store", link: "/merchstore" },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    { name: "Get Involved", link: "/getInvolved" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full shadow relative">
      {/* Top bar */}
      <div className="bg-[#0f4c81] text-white text-sm flex justify-between items-center px-4 md:px-6 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>(+234-8101234567)</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Mail size={16} />
            <span>info@cloudadore.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs md:text-sm">
          <span className="hidden sm:block">Follow us:</span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-6 py-3 bg-white relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/cecf005214585628fbf93a768983a7a24628716b(1).png"
            alt="Cloudadore Logo"
            className="h-8"
          />
          <Link href="/">
            <span className="text-[#0f4c81] font-bold text-lg">CLOUDADORE</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-6 text-gray-700 text-sm relative">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.link}
                className={`cursor-pointer hover:text-[#0f4c81] hover:underline hover:underline-offset-4 transition ${
                  item.name === "Contact" ? "border-b-2 border-[#0f4c81]" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
         <Link href="/cart" className="relative">
            {/* <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )} */}
          </Link>

        {/* Desktop Buttons */}
        {/* donate is moved to events page */}
        {/* <div className="hidden lg:flex items-center space-x-3">
          <a
            href="/donate"
            className="border border-[#f97316] text-[#f97316] px-3 py-1 rounded-md text-sm hover:bg-[#f97316] hover:text-white transition"
          >
            Donate
          </a>
          join comminuty moved to events page
          <a
            href="/join"
            className="bg-[#0f4c81] text-white px-4 py-1 rounded-md text-sm hover:bg-[#09365e] transition"
          >
            Join Community
          </a>
        </div> */}

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full z-20 px-6 py-4 space-y-4">
          <ul className="flex flex-col space-y-3 text-gray-700 text-sm">
            {navItems.map((item, index) => (
              <li key={index} className="flex flex-col">
                <a
                  href={item.link}
                  className={`cursor-pointer hover:text-[#0f4c81] hover:underline hover:underline-offset-4 ${
                    item.name === "Contact"
                      ? "border-b-2 border-[#0f4c81] w-max"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
