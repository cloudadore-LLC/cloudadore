import React from "react";

export default function ContactForm() {
  return (
    <section className="flex justify-center items-center py-12 px-4">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-2">Send a Message</h2>
        <p className="text-gray-600 text-center mb-6">
          Feel free to reach out to us with any questions, feedback or inquiries.
          <br />
          We are here to assist you every step of the way.
        </p>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              Subject *
            </label>
            <select
              id="subject"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="reset"
              className="text-blue-600 hover:underline text-sm"
            >
              Clear Form
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
