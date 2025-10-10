"use client"
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "How do I join CloudAdore Club?",
    "How do I join CloudAdore Club?",
    "How do I join CloudAdore Club?",
    "How do I join CloudAdore Club?",
    "How do I join CloudAdore Club?",
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center items-center py-12 px-4">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Find quick answers to common questions about CloudAdore Club
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 hover:bg-gray-50"
              >
                {faq}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  luctus eros aliquet convallis ultricies.
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm mb-2">Still have questions?</p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
            Contact our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
