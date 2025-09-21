import Card from "@/components/Card";
import { BookOpenCheck, Calendar1, Cloud, ShoppingCart } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col bg-gray-200 py-4">
      {/* top section */}
      <section className=" flex flex-col mx-auto text-center gap-4">
        <span className="text-[#121212] text-[40px] font-bold">
          Why choose cloudadore?
        </span>
        <span className="text-[#333333]  text-base">
          From learning and collaboration to exclusive perks and real-world
          events, CloudAdore gives <br /> you everything you need to grow and
          thrive in the cloud space.
        </span>
      </section>

      {/* bottom section, cards go here */}
      <section className=" grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
       
        <Card
          icon={<Cloud />}
          featureCardHeader="CloudHub"
          featureCardText="Connect with fellow cloud enthusiasts, share ideas,  and collaborate on innovative projects in our vibrant online hub."
        />
        <Card
          icon={<Calendar1 />}
          featureCardHeader="Events and Programs"
          featureCardText="Attend workshops, webinars, and community-driven programs designed to connect you with industry leaders and opportunities."
        />
        <Card
          icon={<ShoppingCart />}
          featureCardHeader="Merch Shop"
          featureCardText="Show your CloudAdore pride with exclusive apparel, accessories, and gear designed by and for our community."
        />
        <Card
          icon={<BookOpenCheck />}
          featureCardHeader="Resources"
          featureCardText="Unlock a curated library of tutorials, templates, and expert insights to accelerate your cloud mastery."
        />
      </section>
    </div>
  );
};

export default Features;
