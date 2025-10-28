import Card from "@/components/Card";
import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
const teamMembers = [
  {
    name: "Rukayat",
    role: "Founder",
    image: "/images/team/member1.jpg",
  },
  {
    name: "Omage Prosper",
    role: "Founder",
    image: "/images/team/member2.jpg",
  },
  {
    name: "David ",
    role: "Founder",
    image: "/images/team/member3.jpg",
  },
  {
    name: "Adesola Lawal",
    role: "Founder",
    image: "/images/team/member4.jpg",
  },
  {
    name: "Adesola Lawal",
    role: "Founder",
    image: "/images/team/member5.jpg",
  },
  {
    name: "Adesola Lawal",
    role: "Founder",
    image: "/images/team/member6.jpg",
  },
  {
    name: "Adesola Lawal",
    role: "Founder",
    image: "/images/team/member7.jpg",
  },
  {
    name: "Adesola Lawal",
    role: "Founder",
    image: "/images/team/member8.jpg",
  },
];

const partners = [
  "/images/partners/slack.png",
  "/images/partners/amazon.png",
  "/images/partners/logitech.png",
  "/images/partners/google.png",
  "/images/partners/facebook.png",
];

const page = () => {
  return (
    <div>
      <section className="bg-black  text-white  text-center md:p-40">
        <h1 className=" font-bold text-[15px] md:text-[60px] ">About cloudadore</h1> <br />
        <p className="m-3">
          Join a global community of innovators shaping the future of cloud
          technology through collaboration, learning, and shared impact.
        </p>
        {/* add link to send to a page that will allow user send us cash */}
        <Button className="border border-[#f97316] text-[#f97316] px-3 py-2 my-4 w-[200px] cursor-pointer rounded-md text-sm hover:bg-[#f97316] hover:text-white transition">
          Donate
        </Button>
      </section>
      <div className="max-w-7xl mx-auto ">
        <section className="my-8 grid gap-4 m-4  md:grid-cols-2">
          <div className="space-y-2">
            <p>
              {" "}
              At CloudAdore Club, we believe the cloud isn’t just technology,
              it’s a bridge to limitless possibilities. What began as a small
              group of enthusiasts exchanging ideas has grown into a thriving
              hub for cloud professionals, learners, and innovators from all
              walks of life.
            </p>
            <p>
              {" "}
              Our vision was simple: create a space where knowledge is shared
              openly, challenges turn into opportunities, and connections spark
              collaboration. We’ve seen how the right community can accelerate
              learning, inspire creativity, and fuel bold solutions.
            </p>
            <p>
              {" "}
              Today, we host workshops, collaborative projects, and networking
              opportunities that help members grow personally and
              professionally. From beginners to seasoned experts, our inclusive
              community thrives on diversity in skills, perspectives, and
              experiences.
            </p>
            <p>
              {" "}
              Our story is still being written and we invite you to be part of
              it. Here, your ideas can take flight, your skills can grow, and
              your passion for the cloud will be celebrated.
            </p>
          </div>
          <div className="outline outline-red-600 rounded-lg text-center">
            image gos here
          </div>
        </section>
        {/* mission and vision */}

        <section>
          <div>
            <h1 className="text-[48px] text-center font-bold ">
              Our Mission and Vision
            </h1>
            <p className="text-[18px] text-center m-10">
              Our community provides resources and support for Christians in the
              tech industry <br /> to grow both spiritually and professionally.
            </p>
          </div>
          <div className="grid gap-10 m-4 md:grid-cols-2">
            <Card
              icon={undefined}
              featureCardHeader="Our Mission"
              featureCardText="Our mission is to empower individuals at every stage of their cloud journey by providing access to knowledge, fostering collaboration, and creating opportunities for growth through education, community, and real-world engagement."
              className="bg-[#E5F9FF4D]"
            />
            <Card
              icon={undefined}
              featureCardHeader="Our Vision"
              featureCardText="To create a vibrant and inclusive cloud community that empowers individuals and organizations to unlock their full potential in the digital world."
              className="bg-[#EB842B]"
            />
          </div>
        </section>
        <section className="bg-white py-16 px-6 md:px-20">
          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Meet our Dedicated Team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Our Partners
            </h3>

            <div className="bg-blue-50 py-8 rounded-lg flex flex-wrap justify-center gap-8">
              {partners.map((logo, index) => (
                <div key={index} className="relative w-24 h-10">
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
