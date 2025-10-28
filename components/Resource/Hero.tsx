import React from 'react'

const Hero = () => {
  return (
    <div>
        <section
      className="relative h-[350px] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/sample1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Learning Resources</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Explore our comprehensive library of tutorials, templates, guides, and tools curated by industry experts to accelerate your cloud journey.
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full md:w-[400px] px-4 py-2 rounded-full text-black focus:outline-none"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero