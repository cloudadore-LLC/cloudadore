import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-gray-500 text-white text-4xl text-center p-20">
       <h1 className="font-bold text-5xl my-3 " >Get Involved</h1>
        <p className="font-[20px]  ">
          Join hands with us to make a lasting impact. Whether you want to
          volunteer, mentor, or partner, there’s a place for you at CloudAdore.
        </p>
      </section>

      <section>
        <div className="flex space-x-3 items-center align-center outline ">
          <span>Volunteer</span>
          <span>Partner With Us</span>
          <span>Mentorship</span>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default page;
