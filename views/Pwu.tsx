"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PartnerWithUsSection() {
  const router = useRouter();

  return (
    <section className="py-12 px-6 md:px-16 bg-white text-gray-900">
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-10 br-gray-1000">
        <button
          onClick={() => router.push("/volunteer")}
          className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
        >
          Volunteer
        </button>

        <button
          onClick={() => router.push("/Pwu")}
          className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Partner With Us
        </button>

        <button
          onClick={() => router.push("/mentorship")}
          className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
        >
          Mentorship
        </button>
      </div>

      <br />
      <hr className="mb-10" />
      <br /> <br />

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            At CloudAdore, every hand makes an impact.
          </h2>
          <p className="text-gray-700 mb-4">
            We believe in the power of community, and volunteers are at the heart
            of what we do. By giving your time and skills, you'll help us create
            meaningful programs, support events, and empower members to thrive in
            the cloud ecosystem. Every contribution, big or small, helps us build
            a stronger, more inclusive community.
          </p>
          <p className="text-gray-700 mb-6">
            Want to make a difference with us? Kindly fill the form on the right.
          </p>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/b902d47fe68387ded783c41a04a9f67a30825338.png"
              alt="Partner with CloudAdore"
              width={500}
              height={350}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Form */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Kindly fill our partnership form.</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Location (State, Country)</label>
              <input
                type="text"
                placeholder="e.g., Lagos, Nigeria"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                In what capacity are you partnering?
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select an option</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="training">Training & Workshops</option>
                <option value="events">Event Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Motivation for partnering with us?
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your goals or expectations"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
