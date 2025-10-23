
import Card from "@/components/Card";
import CTA from "@/views/CTA";
import Sponsors from "@/views/Sponsors";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="text-white bg-gray-600 p-30 ">
        <h1 className="  lg:text-[74px] font-extrabold mx-auto w-[700px] ">
          About Cloudadore
        </h1>
        <p className="lg:text-[20px] font-semibold w-[1200px] mx-auto mt-10  ">
          Join a global community of innovators shaping the future of cloud
          technology through collaboration, learning, and shared impact.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4 p-4  max-w-7xl mx-auto">
        {/* left side */}
        <div>
          <h1 className=" lg:text-[28px] font-bold">
            Building the Future of Cloud Innovation
          </h1>
          <span>
            <p className="py-2">
              At CloudAdore Club, we believe the cloud isn’t just technology,
              it’s a bridge to limitless possibilities. What began as a small
              group of enthusiasts exchanging ideas has grown into a thriving
              hub for cloud professionals, learners, and innovators from all
              walks of life.
            </p>
            <p className="py-2">
              Our vision was simple: create a space where knowledge is shared
              openly, challenges turn into opportunities, and connections spark
              collaboration. We’ve seen how the right community can accelerate
              learning, inspire creativity, and fuel bold solutions.
            </p>
            <p className="py-2">
              Today, we host workshops, collaborative projects, and networking
              opportunities that help members grow personally and
              professionally. From beginners to seasoned experts, our inclusive
              community thrives on diversity in skills, perspectives, and
              experiences. <br /> Our story is still being written and we invite
              you to be part of it. Here, your ideas can take flight, your
              skills can grow, and your passion for the cloud will be
              celebrated.
            </p>
          </span>
        </div>

        {/* right side */}
        <div>image goes here</div>
      </section>

      {/* mission a nd vision section */}
      <section className=" bg-[#F8F9FA]  ">
        <div className="max-w-7xl mx-auto py-10">
          <div>
            <h1 className="flex font-bold justify-center text-[#121212]  md:text-[48px] py-2">
              Our Mission and Vision
            </h1>
            <p className="flex justify-center text-[18px] font-normal text-[#333333] py-2">
              Our community provides resources and support for Christians in the
              tech industry <br /> to grow both spiritually and professionally.
            </p>
          </div>
          <div className="grid p-8 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Card
              // icon={}
              featureCardHeader="Our Mission"
              featureCardText="Our mission is to empower individuals at every stage of their cloud journey by providing access to knowledge, fostering collaboration, and creating opportunities for growth through education, community, and real-world engagement."
              // styling for the header
              fchStyle="text-[28px] p-2 font-semibold"
              // styling fr the text
              fctStyle="  md:w-[540px] text-[18px] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              featureCardHeader="Our Vision"
              featureCardText="To create a vibrant and inclusive cloud community that empowers individuals and organizations to unlock their full potential in the digital world."
              // styling for the header
              fchStyle="text-[28px] p-2 font-semibold"
              // styling fr the text
              fctStyle="  md:w-[540px] text-[18px] font-normal"
              className="bg-[#FFE7AC33] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
          </div>
        </div>
      </section>

      {/* meet the team section */}
      <section>
        <div className="max-w-7xl mx-auto ">
          <h1 className="flex  justify-center py-8 text-[40px] font-bold ">Meet our dedicated team</h1>
          <div className="grid gap-8 space-y-8 md:grid-cols-2 lg:grid-cols-4">
            <Card
              // profilePhoto=""
              featureCardHeader="Rukayat "
              featureCardText="Founder"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="Omage Jehoshaphat Prosper"
              featureCardText="Front-end developer"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="David "
              featureCardText="Front-end developer"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="Okeyemi Mercy "
              featureCardText="UI/UX designer"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="Adesola Lawal"
              featureCardText="Founder"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="Adesola Lawal"
              featureCardText="Founder"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="Adesola Lawal"
              featureCardText="Founder"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="Adesola Lawal"
              featureCardText="Founder"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
            <Card
              // profilePhoto=""
              featureCardHeader="Adesola Lawal"
              featureCardText="Founder"
              // styling for the header
              fchStyle="text-[20px] p-2 font-[400] "
              // styling fr the text
              fctStyle="   text-[16px] text-[#08568A] font-normal"
              className="bg-[#E5F9FF4D] rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
            />
          </div>
        </div>
      </section>
      <Sponsors/>
      <CTA/>
      
    </div>
  );
};

export default page;

