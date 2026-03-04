import React from "react";

const page = () => {
  return (
    <div className=" outline mx-auto">
      {/* hero section */}
      <section className="bg-blue-500 text-white text-center p-20 ">
        <p className="font-bold  text-[72px]">Contact Us</p>
        <p className="  items-center ">
          Have questions, ideas, or want to collaborate? We'd love to hear from
          you. Reach out to our team and become part of the CloudAdore
          community.
        </p>
      </section>
      <div className="max-w-7xl mx-auto  my-10">
        <section className="my-10">
          <div className=" grid md:grid-cols-3 gap-3">
            {[1, 2, 3].map((card) => (
              <div className="border border-green-500 w-[390px] h-[300px] rounded-lg  items-center ">
                <p>icon</p>
                <p>title</p>
                <p>text</p>
                <p>email</p>
                <button>Send Email</button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="bg-gray-200 p-10">
        <div className="bg-white border border-red-500 rounded-lg text-black text-center ">
          <p className="font-bold text-[32px] ">Send a Message</p>
          <h1 className="text-[18px]" >
            Feel free to reach out to us with any questions, feedback or
            inquiries. We are here to assist you every step of the way.
          </h1>
        </div>
      </section>
      <section>
        FAQs go here
        <h1 className="text-[32px] font-semibold  my-5 " >Frequently asked Questions</h1>
        <h1  className="w-[961px]"> Find quick answers to common questions about CloudAdore Club </h1>

      </section>
    </div>
  );
};

export default page;
