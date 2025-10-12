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
      dropdown: [
        { label: "Upcoming Events", link: "/events/upcoming" },
        { label: "Past Events", link: "/events/past" },
        { label: "Volunteer", link: "/events/volunteer" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { label: "Blog", link: "/resources/blog" },
        { label: "Downloads", link: "/resources/downloads" },
        { label: "Media", link: "/resources/media" },
      ],
    },
    { name: "Get Involved", link: "/get-involved" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div >
      <section className="hidden lg:flex justify-between text-sm p-2 bg-[#08568A] text-white">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" /> +234-8101234567
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" /> info@cloudadore.com
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs md:text-sm">
          <span className="hidden sm:block">Follow us:</span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={16} className="cursor-pointer hover:text-gray-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} className="cursor-pointer hover:text-gray-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={16} className="cursor-pointer hover:text-gray-300" />
          </a>
        </div>
      </section>
      
       <div className="  max-w-7xl outline flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold text-blue-900">
          <Link href='/'>
           <Image src='/brandlogo.svg'
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
          <Button className="outline outline-[#EB842B] text-[#EB842B] bg-white cursor-pointer">Donate</Button>
          <Button className="bg-[#08568A] text-white cursor-pointer  ">Join Community</Button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-6 text-gray-700 text-sm relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() =>
                item.dropdown && setOpenDropdown(item.name)
              }
              onMouseLeave={() =>
                item.dropdown && setOpenDropdown(null)
              }
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
