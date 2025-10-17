"use client";
import React from "react";
import Image from "next/image";
import backgroundImage from "../../public/eventsImages/FrameC.svg";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import EventCard from "@/components/EventCard";
// public/eventsImages/FrameC.svg
const page = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <Image
          src={backgroundImage}
          alt="Background Image"
          height={100}
          width={1920}
          // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the entire area
          quality={100} // Optional: Adjust image quality
          priority // Optional: Load image with high priority
          style={{ zIndex: -1 }} // Place the image behind other content
        />
      </div>

      <div className="max-w-7xl mx-auto mt-20 outline grid md:grid-cols-2">
        <div>
          {/* tag for event */}
          <span className="rounded-lg mt-10  bg-[#FFEAD8] text-[#EB842B] p-2 ">
            Featured Event
          </span>
          {/* info on the event */}
          <div className="mt-8">
            <h1 className="text-[28px] font-bold p-4">
              AWS Certification Workshop
            </h1>
            <div className="grid gap-4 grid-cols-2">
              <span className="flex">
                <Calendar />
                <span className="ml-2">September 14,2025</span>
              </span>
              <span className="flex">
                <Calendar />
                <span>September 14,2025</span>
              </span>
              <span className="flex">
                <Calendar />
                <span>September 14,2025</span>
              </span>
            </div>
          </div>
          <p className="mt-6 text-[18px] font-normal  ">
            Join industry leaders for insights on next-generation cloud <br />
            architecture patterns, serverless computing, and enterprise-scale
            solutions.
          </p>
          <div>
            <div className="flex">
              <Calendar className="mt-2" />
              <div className="p-2 ">
                <h3 className="font-bold">Who Should Attend</h3>
                <h4 className="m-2">
                  Open to developers, architects, IT leaders, and anyone
                  passionate <br /> about cloud innovation.
                </h4>
              </div>
            </div>
            <div className="flex">
              <Calendar className="mt-2" />
              <div className="p-2 ">
                <h3 className="font-bold">What to Expect</h3>
                <h4 className="m-2 ">
                  Keynote speakers, breakout sessions, networking events,
                  gatherings, <br /> and opportunities to connect with
                  like-minded professionals.
                </h4>
              </div>
            </div>
          </div>

          <Button className="bg-blue-700 mt-10">Register Now</Button>
        </div>
        <div>
          <Image
            src="/eventsImages/Rectangle 1457.svg"
            alt="Background Image"
            height={500}
            width={500}
            className="m-10"
          />
        </div>
      </div>
      {/* tabs and cards  */}
      <section className="flex flex-col max-w-7xl mx-auto ">
        <h1 className="text-[35px] font-bold ">All Upcoming Events</h1>
        {/* tabs */}

        <div className="flex justify-center gap-4 m-10 border-gray-1000">
          <button
            onClick={() => router.push("/volunteer")}
            className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Upcoming Events
          </button>
          <button
            onClick={() => router.push("/Pwu")}
            className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Past Events
          </button>
          <button
            onClick={() => router.push("/mentorship")}
            className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Partner Events
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <EventCard
            tag="upcoming"
            header="new haven"
            content="our new event for upcoming cloud devs"
            date="12/12/24"
            location="Ojuelegba"
            image='/eventsImages/Rectangle 1463.png'
          />
          <EventCard
            tag="upcoming"
            header="new haven"
            content="our new event for upcoming cloud devs"
            date="12/12/25"
            location="Ojuelegba"
            image='/eventsImages/Rectangle 1463.png'
          />
          <EventCard
            tag="upcoming"
            header="new haven"
            content="our new event for upcoming cloud devs"
            date="12/12/24"
            location="Ojuelegba"
            image='/eventsImages/Rectangle 1463.png'
          />
        </div>
      </section>
    </div>
  );
};

export default page;
