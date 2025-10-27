import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#002B4E] text-white mt-20">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto -translate-y-16 px-6">
        <div className="bg-[#0A6BB5] rounded-2xl py-10 px-6 md:px-12 text-center text-white shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to be part of our story?
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base mb-8 text-blue-100">
            Join a thriving community of cloud learners, builders, and
            innovators. Whether you want to learn, share, or lead, there’s a
            place for you at CloudAdore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition">
              Join Community
            </button>
           
           
            <button className="border border-white hover:bg-white hover:text-[#0A6BB5] text-white px-6 py-2 rounded-lg font-medium transition">
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 pb-12">
        {/* Logo + Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/brandlogo.png"
              alt="CloudAdore Logo"
              width={40}
              height={40}
            />
            <span className="text-lg font-semibold">CLOUDADORE</span>
          </div>
          <p className="text-sm text-blue-200 mb-4">
            Empowering Cloud Enthusiasts Through Community, Collaboration, and
            Continuous Learning.
          </p>
          <p className="text-sm text-blue-200 mb-2">
            <span className="font-medium text-white">Email:</span>{" "}
            christiandotecommunity.com
          </p>
          <p className="text-sm text-blue-200">
            <span className="font-medium text-white">Phone:</span> +234 810 086
            3452
          </p>
          <div className="flex gap-3 mt-4">
            <Link href="#" aria-label="Twitter">
              <i className="ri-twitter-fill text-xl text-white hover:text-blue-400"></i>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <i className="ri-linkedin-box-fill text-xl text-white hover:text-blue-400"></i>
            </Link>
            <Link href="#" aria-label="Instagram">
              <i className="ri-instagram-line text-xl text-white hover:text-blue-400"></i>
            </Link>
            <Link href="#" aria-label="YouTube">
              <i className="ri-youtube-fill text-xl text-white hover:text-blue-400"></i>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Events</Link>
            </li>
            <li>
              <Link href="#">Get Involved</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li>
              <Link href="#">Join Community</Link>
            </li>
            <li>
              <Link href="#">Merch Store</Link>
            </li>
            <li>
              <Link href="#">Donate</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Stay Updated</h3>
          <p className="text-blue-200 text-sm mb-4">
            Subscribe to our newsletter for the latest updates and cloud
            insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-blue-700 text-center text-blue-300 text-sm py-4">
        © 2025 CloudAdore Club. All rights reserved.
      </div>
    </footer>
  );
}
