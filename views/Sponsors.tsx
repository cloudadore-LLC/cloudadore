import React from "react";

const Sponsors = () => {
  return (
    <section className="py-12 ">
      <h1 className="  flex justify-center my-10 font-extrabold  md:text-[36px]">
        Our Partners
      </h1>
      <div className="outline bg-[#E5F9FF]">
        <div className="flex items-center justify-center gap-12 p-16 opacity-60">
          <img src="/slack-logo.png" alt="Slack" className="h-8 text-[25px]" />
          <img
            src="/amazon-logo.png"
            alt="Amazon"
            className="h-8 text-[25px]"
          />
          <div className=" text-blue-600 px-3 py-1 rounded text-sm font-bold">
            logitech
          </div>
          <img src="/google-logo.png" alt="Google" className="h-8" />
          <img src="/facebook-logo.png" alt="Facebook" className="h-8" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
