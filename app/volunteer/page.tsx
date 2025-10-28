"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VolunteerSection() {
  const router = useRouter();

  return (
    <section className="w-full px-4 md:px-12 py-12">
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {/* Volunteer Button (Blue) */}
        <button
          onClick={() => router.push("/volunteer")}
          className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Volunteer
        </button>

        {/* Other Buttons (Hover Blue) */}
        <button
          onClick={() => router.push("/Pwu")}
          className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
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

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            At CloudAdore, every hand makes an impact.
          </h2>
          <p className="text-gray-700 mb-6">
            We believe in the power of community, and volunteers are at the heart of what we do. By giving your time and skills, you&apos;ll help us create meaningful programs, support events, and empower members to thrive in the cloud ecosystem. Every contribution, big or small, helps us build a stronger, more inclusive community.
          </p>
          <p className="text-gray-700 mb-6">
            Want to make a difference with us? Kindly fill the form on the right.
          </p>
          <Image
            src="/3914c6b053d91b80ddb1f9e16d9cac2fd6531617.png"
            alt="Volunteer at CloudAdore"
            width={500}
            height={350}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Kindly fill our volunteering form.
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location (State, Country)</label>
              <input
                type="text"
                placeholder="e.g., Lagos, Nigeria"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                In what capacity are you volunteering?
              </label>
              <select className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select an option</option>
                <option value="mentor">Mentor</option>
                <option value="organizer">Event Organizer</option>
                <option value="speaker">Speaker</option>
                <option value="support">General Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Motivation for volunteering with us?
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your expectations"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
