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
} from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Merch Store", link: "/store" },
    {
      name: "Events",
      link: "/events",
      // dropdown: [
      //   { label: "Upcoming Events", link: "/events/upcoming" },
      //   { label: "Past Events", link: "/events/past" },
      //   { label: "Volunteer", link: "/events/volunteer" },
      // ],
    },
    {
      name: "Resources",
      link: "/resources",
      dropdown: [
        { label: "Blog", link: "/resources/blog" },
        { label: "Downloads", link: "/resources/download" },
        { label: "Media", link: "/resources/media" },
      ],
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
          <span className="text-[#0f4c81] font-bold text-lg">CLOUDADORE</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-6 text-gray-700 text-sm relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              {item.dropdown ? (
                <button className="flex items-center space-x-1 hover:text-[#0f4c81] transition">
                  <span>{item.name}</span>
                  <ChevronDown size={14} />
                </button>
              ) : (
                <a
                  href={item.link}
                  className={`cursor-pointer hover:text-[#0f4c81] hover:underline hover:underline-offset-4 transition ${
                    item.name === "Contact" ? "border-b-2 border-[#0f4c81]" : ""
                  }`}
                >
                  {item.name}
                </a>
              )}

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.name && (
                <ul className="absolute left-0 top-full mt-2 bg-white border shadow-lg rounded-md py-2 w-48 z-30">
                  {item.dropdown.map((sub, i) => (
                    <li key={i}>
                      <a
                        href={sub.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0f4c81]"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="/donate"
            className="border border-[#f97316] text-[#f97316] px-3 py-1 rounded-md text-sm hover:bg-[#f97316] hover:text-white transition"
          >
            Donate
          </a>
          <a
            href="/join"
            className="bg-[#0f4c81] text-white px-4 py-1 rounded-md text-sm hover:bg-[#09365e] transition"
          >
            Join Community
          </a>
        </div>

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
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between hover:text-[#0f4c81]"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((sub, i) => (
                          <li key={i}>
                            <a
                              href={sub.link}
                              className="block hover:text-[#0f4c81]"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
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
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3 pt-3">
            <a
              href="/donate"
              className="border border-[#f97316] text-[#f97316] px-3 py-2 rounded-md text-sm hover:bg-[#f97316] hover:text-white transition"
            >
              Donate
            </a>
            <a
              href="/join"
              className="bg-[#0f4c81] text-white px-4 py-2 rounded-md text-sm hover:bg-[#09365e] transition"
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
