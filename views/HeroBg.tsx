import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/8e5c55067263e2ee5c7a700cc8715badf0a367dc.png')", // Replace with actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg">
          Have questions, ideas, or want to collaborate? We'd love to hear from you.
          Reach out to our team and become part of the CloudAdore community.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
