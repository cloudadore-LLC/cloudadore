import React from "react";

const DonationSection: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 flex flex-col md:flex-row gap-10">
      {/* Donation Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-6">
          Kindly fill our donation form.
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Amount(Naira)</label>
            <select className="w-full border rounded-md p-2">
              <option value="">Select amount</option>
              <option value="1000">₦1,000</option>
              <option value="5000">₦5,000</option>
              <option value="10000">₦10,000</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Program donating to</label>
            <select className="w-full border rounded-md p-2">
              <option value="">Select program</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="community">Community Development</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded-md p-2"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Message (Optional)
            </label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Enter a message"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
          >
            Donate
          </button>
        </form>
      </div>

      {/* Banking Details */}
      <div className="w-full md:w-1/2 bg-blue-100 rounded-xl p-6">
        <h2 className="font-semibold">BANKING DETAILS</h2>
        {/* Add actual bank details here */}
      </div>
    </section>
  );
};

export default DonationSection;
