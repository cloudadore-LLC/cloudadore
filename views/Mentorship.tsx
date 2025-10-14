"use client";
import React from "react";
import { useRouter } from "next/navigation"; // make sure this is imported
import Link from "next/link";

const MentorshipSection: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <section className="w-full px-4 py-12 md:px-12 lg:px-20 bg-white">
        {/* Top Navigation */}
        <div className="flex justify-center gap-4 mb-10 border-gray-1000">
          <button
            onClick={() => router.push("/volunteer")}
            className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Volunteer
          </button>
          <button
            onClick={() => router.push("/Pwu")}
            className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Partner With Us
          </button>
          <button
            onClick={() => router.push("/mentorship")}
            className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Mentorship
          </button>
        </div>

        <br />
        <hr className="mb-10" />
        <br />
        <br />

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <p className="text-blue-700 font-semibold uppercase text-sm mb-2">
              Become a Mentor
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Empower the Next Generation Through Mentorship
            </h2>
            <p className="text-gray-700 mb-6">
              At CloudAdore, we believe knowledge grows when it is shared. By becoming a mentor, you have the opportunity to guide, inspire, and equip learners and young professionals with the skills and confidence they need to thrive in cloud technology and beyond. Your experience can help shape meaningful careers and create lasting impact.
            </p>
            <img
              src="/304b91c621ee4b6faf8cf39d95b669f86909d96d.png"
              alt="Mentorship"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right Section - Form */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Kindly fill the form to get started as a mentor.
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Location (State, Country)"
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div>
                <select className="w-full border rounded px-4 py-2">
                  <option>In what capacity are you volunteering?</option>
                  <option>Mentor</option>
                  <option>Trainer</option>
                  <option>Advisor</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Motivation for volunteering with us?"
                  className="w-full border rounded px-4 py-2 h-24"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full px-4 py-12 md:px-12 lg:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-700 font-semibold uppercase text-sm mb-2">
              Find a Mentor
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Learn, grow, and thrive with guidance from experts
            </h2>
            <p className="text-gray-700 mb-6">
              Everyone’s journey is easier with the right guidance. At CloudAdore, we connect learners and professionals with mentors who provide personalized support, industry insights, and practical advice to help you grow in your career. Whether you’re exploring new paths or deepening your expertise, mentorship offers a powerful way to accelerate your growth.
            </p>
            <Link href="/find-mentor">
              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                Find a Mentor
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/a5d6f702ed206cc8360fa5fb06326cf3ae085f37.png"
              alt="Find a Mentor"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorshipSection;
