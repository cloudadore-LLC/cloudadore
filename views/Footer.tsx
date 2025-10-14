import { Button } from '@/components/ui/button'
import React from 'react'

export default function FooterSection() {
  return (
    <footer className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Cloudadore</h3>
              <p className="text-blue-200 text-sm mb-4">Premium cloud-inspired apparel for the modern professional.</p>
              <div className="text-sm text-blue-200">
                <p>123 Cloud Street</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Join Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-sm text-blue-200 mb-4">
                Subscribe to our newsletter for the latest updates and exclusive offers.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm text-blue-200">
            <p>&copy; 2024 Cloudadore. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer