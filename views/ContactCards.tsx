import React from "react";
import { Mail, Phone, Users } from "lucide-react";

const ContactCards: React.FC = () => {
  const contacts = [
    {
      icon: <Mail className="w-8 h-8 text-[#0f4c81]" />,
      title: "Email Us",
      desc: "Get in touch via email for general inquiries",
      value: "hello@cloudadoreclub.com",
      href: "mailto:hello@cloudadoreclub.com",
      button: "Send Email",
    },
    {
      icon: <Phone className="w-8 h-8 text-[#0f4c81]" />,
      title: "Phone Call Support",
      desc: "Get in touch from 9AM-5PM WAT via phone",
      value: "+2348012345678",
      href: "tel:+2348012345678",
      button: "Contact Us",
    },
    {
      icon: <Users className="w-8 h-8 text-[#0f4c81]" />,
      title: "Partnership Inquiries",
      desc: "Interested in partnering with CloudAdore?",
      value: "partnerships@cloudadoreclub.com",
      href: "mailto:partnerships@cloudadoreclub.com",
      button: "Partnership Support",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{item.desc}</p>
            <a
              href={item.href}
              className="text-[#0f4c81] font-medium mb-4 break-words"
            >
              {item.value}
            </a>
            <a
              href={item.href}
              className="bg-[#0f4c81] text-white px-4 py-2 rounded-md text-sm hover:bg-[#09365e] transition"
            >
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;
