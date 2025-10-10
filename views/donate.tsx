import React from "react";

const Donate: React.FC = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/0c054027fc7286537eb0a17cdd0f8e72f328465c.png')", 
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Get Involved </h1> 
        <p className="max-w-2xl mx-auto text-sm md:text-lg">
Join hands with us to make a lasting impact. Whether you want to volunteer, mentor, or partner, there’s a place for you at CloudAdore.
        </p>
      </div>
    </section>
  );
};

export default Donate;
