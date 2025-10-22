import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/2a1cc68360755ca09cb27383da3cf17b12791211.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Support Our Mission </h1> 
        <p className="max-w-2xl mx-auto text-sm md:text-lg">
Help us keep CloudAdore Club free and accessible to cloud professionals worldwide. Your donation directly supports community growth, education, and innovation.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
