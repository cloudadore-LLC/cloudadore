import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white pt-12">
      {/* Connect With Us */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl shadow-md w-full max-w-4xl text-center p-8 -mt-16">
          <h2 className="text-xl font-semibold mb-2">Connect With Us</h2>
          <p className="text-gray-100 mb-6">
            Follow us on social media for the latest updates, tips, and community highlights
          </p>
          <div className="flex justify-center space-x-6 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>

      {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Info */}
        <div>
          <img src="/cecf005214585628fbf93a768983a7a24628716b(1).png" alt="Cloudadore Logo" className="h-8" />
          <h3 className="text-lg font-bold mb-2">CLOUDADORE</h3>
          <p className="text-gray-300 text-sm mb-4">
            Empowering Cloud Enthusiasts Through Community, Collaboration, And Continuous Learning.
          </p>
          <p className="text-sm mb-1">Email Address</p>
          <p className="text-sm mb-3">christian@techcommunity.com</p>
          <p className="text-sm mb-1">Phone Number</p>
          <p className="text-sm mb-4">+234-810 986 3452</p>
          <div className="flex space-x-3 text-xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Events</a></li>
            <li><a href="#" className="hover:text-white">Get Involved</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Join Community</a></li>
            <li><a href="#" className="hover:text-white">Merch Store</a></li>
            <li><a href="#" className="hover:text-white">Donate</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Stay Updated</h4>
          <p className="text-gray-300 text-sm mb-3">
            Subscribe to our newsletter for the latest updates and cloud insights.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Join Community
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm py-4 border-t border-gray-700">
        © 2025 CloudAdore Club. All rights reserved.
      </div>
    </footer>
  );
}
