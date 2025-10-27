import Image from "next/image";
import React from "react";

const images = [
  { src: "/home page logos/Group 284.svg", title: "slack" },
  { src: "/home page logos/Group 505.svg", title: "Amazon" },
  { src: "/home page logos/Group 520.svg", title: "Logitech" },
  { src: "/home page logos/slack-2 1.svg", title: "Google" },
  { src: "/home page logos/Vector.svg", title: "Facebook" },
];

const Sponsors = () => {
  return (
    <section className=" bg-[#E5F9FF]  md:py-12 px-4">
      <div className="opacity-60 flex flex-wrap mx-auto items-center justify-center text-[10px] md: gap-12 ">
        {images.map(({ src, title }, i) => (
          <Image src={src} alt={title} width={100} height={50} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
