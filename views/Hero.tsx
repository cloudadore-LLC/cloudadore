import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  // bg-[url('/heroBg.svg')] bg-cover bg-center
  const stats = [
    { number: "10K+", label: "Active Members" },
    { number: "100+", label: "Events Hosted" },
    { number: "500", label: "Certifications Earned" },
    { number: "20+", label: "Partners Organization" },
  ];
  return (
    <section className="relative bg-blue-900 text-white px-6 py-20 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building the Future of{" "}
            <span className="text-orange-400">Cloud</span> through Community
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Join a global community of cloud professionals, developers, and
            innovators sharing knowledge, collaborating, and growing together.
          </p>
          <div className="mt-6 flex gap-4">
            <Button className="bg-blue-600 text-white">Join Community</Button>
            <Button className="text-white border-white ">Learn More</Button>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          <div className="w-72 h-72 bg-blue-600/30 rounded-xl flex items-center justify-center">
            <span className="text-gray-300">[Illustration Placeholder]</span>
            <Image
              src="/HeroImage.svg"
              alt="heroimage"
              width={600}
              height={600}
              className="absolute"
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-3xl font-bold">{stat.number}</p>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
