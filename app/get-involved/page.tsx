"use client";

import { useState } from "react";

type TabId = "volunteer" | "partner" | "mentorship";

interface Tab {
  id: TabId;
  label: string;
}

interface BaseField {
  label: string;
  col?: number;
}

interface TextField extends BaseField {
  type: "text" | "email" | "tel";
  placeholder: string;
}

interface SelectField extends BaseField {
  type: "select";
  options: string[];
}

interface TextareaField extends BaseField {
  type: "textarea";
  placeholder: string;
}

type FormField = TextField | SelectField | TextareaField;

interface TabFormConfig {
  heading: string;
  fields: FormField[];
  image: string;
  imageAlt: string;
}

interface SideContent {
  title: string;
  body: string;
}

const tabs: Tab[] = [
  { id: "volunteer", label: "Volunteer" },
  { id: "partner", label: "Partner With Us" },
  { id: "mentorship", label: "Mentorship" },
];

const formFields: Record<TabId, TabFormConfig> = {
  volunteer: {
    heading: "Kindly fill our volunteering form.",
    fields: [
      { label: "Full Name", type: "text", placeholder: "John Doe" },
      { label: "Email Address", type: "email", placeholder: "john@example.com" },
      { label: "Phone Number", type: "tel", placeholder: "+1 234 567 890" },
      { label: "Area of Interest", type: "select", options: ["Community Outreach", "Education", "Healthcare", "Environment"] },
      { label: "Availability", type: "select", options: ["Weekdays", "Weekends", "Both"] },
      { label: "Message", type: "textarea", placeholder: "Tell us why you want to volunteer..." },
    ],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Volunteers working together",
  },
  partner: {
    heading: "Kindly fill our partnership form.",
    fields: [
      { label: "Organization Name", type: "text", placeholder: "Acme Corp" },
      { label: "Contact Person", type: "text", placeholder: "Jane Smith" },
      { label: "Email Address", type: "email", placeholder: "jane@acme.com" },
      { label: "Phone Number", type: "tel", placeholder: "+1 234 567 890" },
      { label: "Partnership Type", type: "select", options: ["Financial", "In-Kind", "Technical", "Strategic"] },
      { label: "Message", type: "textarea", placeholder: "Describe your partnership interest..." },
    ],
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Business partners shaking hands",
  },
  mentorship: {
    heading: "Kindly fill the form to get started as a mentor.",
    fields: [
      { label: "Full Name", type: "text", placeholder: "Dr. Alex Johnson" },
      { label: "Email Address", type: "email", placeholder: "alex@example.com" },
      { label: "Professional Title", type: "text", placeholder: "Senior Software Engineer" },
      { label: "Years of Experience", type: "select", options: ["1-3 years", "3-5 years", "5-10 years", "10+ years"] },
      { label: "Mentorship Area", type: "select", options: ["Technology", "Business", "Healthcare", "Education", "Arts"] },
      { label: "Message", type: "textarea", placeholder: "Share your mentorship goals..." },
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Mentor and mentee in discussion",
  },
};

const sideContent: Record<TabId, SideContent> = {
  volunteer: {
    title: "At CloudAdore, every hand makes an impact.",
    body: "We believe in the power of community. Whether you're passionate about education, health, or social welfare, there's a place for you here. Your time and skills can transform lives—join us and be the change.",
  },
  partner: {
    title: "At CloudAdore, every hand makes an impact.",
    body: "Partnership with CloudAdore opens doors to meaningful collaboration. Whether through funding, expertise, or resources, your organization can help us scale our reach and deepen our impact across communities.",
  },
  mentorship: {
    title: "Empower the Next Generation Through Mentorship",
    body: "Learn, grow, and thrive with guidance from experts. Our mentorship program connects aspiring individuals with seasoned professionals. Share your knowledge, inspire change, and help shape tomorrow's leaders.",
  },
};

const inputBase =
  "w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

function FormFieldComponent({ field }: { field: FormField }) {
  if (field.type === "select") {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
          {field.label}
        </label>
        <select className={inputBase} defaultValue="">
          <option value="" disabled>Select an option</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
          {field.label}
        </label>
        <textarea
          rows={3}
          placeholder={field.placeholder}
          className={`${inputBase} resize-none`}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        {field.label}
      </label>
      <input
        type={field.type}
        placeholder={field.placeholder}
        className={inputBase}
      />
    </div>
  );
}

export default function page() {
  const [activeTab, setActiveTab] = useState<TabId>("volunteer");

  const current = formFields[activeTab];
  const side = sideContent[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Banner */}
      <div
        className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a2540 0%, #1a4480 60%, #1565c0 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&auto=format&fit=crop&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Get Involved
          </h1>
          <p className="mt-3 text-blue-100 text-base md:text-lg max-w-xl mx-auto">
            Whether you volunteer, partner, or mentor — your action drives real change in our communities.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="flex gap-0 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm font-semibold transition-all border-b-2 -mb-px focus:outline-none ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-700 bg-white"
                  : "border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="bg-white rounded-b-2xl shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Info + Image */}
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  {side.title}
                </h2>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {side.body}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h3 className="text-base font-bold text-gray-700 mb-4">
                {current.heading}
              </h3>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
                className="flex flex-col gap-4"
              >
                {current.fields.map((field, i) => (
                  <FormFieldComponent key={i} field={field} />
                ))}
                <button
                  type="submit"
                  className="mt-2 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg text-sm tracking-wide transition-all shadow hover:shadow-md active:scale-95"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16" />
    </div>
  );
}