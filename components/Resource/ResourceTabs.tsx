"use client";

import { useState } from "react";
import Image from "next/image";

const resources = [
  {
    category: "Blog",
    date: "August 20, 2025",
    title: "Serverless Security: Protecting Your Functions",
    description:
      "Deep dive into serverless functions and secure deployments for modern cloud applications.",
    image: "/images/sample1.jpg",
  },
  {
    category: "Template",
    date: "August 20, 2025",
    title: "CI/CD Pipeline Template for AWS",
    description:
      "Use this prebuilt AWS CI/CD pipeline template for automated deployments and cloud efficiency.",
    image: "/images/sample2.jpg",
  },
  {
    category: "Video Tutorial",
    date: "August 20, 2025",
    title: "Kubernetes Deployment Tutorial: Zero to Production",
    description:
      "Step-by-step video guide to deploying your first Kubernetes application.",
    image: "/images/sample3.jpg",
  },
  {
    category: "Blog",
    date: "August 22, 2025",
    title: "Scaling React Apps with Next.js 15",
    description:
      "Learn best practices for scaling modern React apps using Next.js features and optimizations.",
    image: "/images/sample4.jpg",
  },
  {
    category: "Template",
    date: "August 25, 2025",
    title: "Tailwind Landing Page Template",
    description:
      "A sleek, responsive landing page template built entirely with TailwindCSS.",
    image: "/images/sample5.jpg",
  },
  {
    category: "Video Tutorial",
    date: "August 27, 2025",
    title: "Deploying with Vercel: Step-by-Step Guide",
    description:
      "Master the process of deploying Next.js apps on Vercel with custom configurations.",
    image: "/images/sample6.jpg",
  },
  {
    category: "Blog",
    date: "August 28, 2025",
    title: "Understanding React Server Components",
    description:
      "A breakdown of how React Server Components optimize data fetching and rendering.",
    image: "/images/sample7.jpg",
  },
  {
    category: "Template",
    date: "August 29, 2025",
    title: "Portfolio Template with Next.js",
    description:
      "Use this modern portfolio template to showcase your work with animations and transitions.",
    image: "/images/sample8.jpg",
  },
  {
    category: "Video Tutorial",
    date: "September 1, 2025",
    title: "Next.js Authentication with Google",
    description:
      "Learn how to add Google authentication in your Next.js app using Firebase.",
    image: "/images/sample9.jpg",
  },
  {
    category: "Blog",
    date: "September 3, 2025",
    title: "Optimizing Lighthouse Scores",
    description:
      "Tips for improving your website’s Lighthouse performance, accessibility, and SEO metrics.",
    image: "/images/sample10.jpg",
  },
  {
    category: "Template",
    date: "September 5, 2025",
    title: "Dashboard Template for SaaS",
    description:
      "A modern SaaS dashboard template designed with Tailwind and shadcn/ui.",
    image: "/images/sample11.jpg",
  },
  {
    category: "Video Tutorial",
    date: "September 7, 2025",
    title: "Building APIs with NestJS and Prisma",
    description:
      "Learn backend development with NestJS and Prisma ORM for scalable applications.",
    image: "/images/sample12.jpg",
  },
  {
    category: "Blog",
    date: "September 8, 2025",
    title: "Deploying Dockerized Apps",
    description:
      "A complete guide to deploying containerized applications in production.",
    image: "/images/sample13.jpg",
  },
  {
    category: "Template",
    date: "September 9, 2025",
    title: "E-commerce UI Template",
    description:
      "Use this responsive e-commerce UI template with product cards and checkout flow.",
    image: "/images/sample14.jpg",
  },
];

export default function Resources() {
  const categories = ["All", "Blog", "Template", "Video Tutorial"];
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredResources =
    activeTab === "All"
      ? resources
      : resources.filter((item) => item.category === activeTab);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResources = filteredResources.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    setCurrentPage(1); // reset pagination when switching tabs
  };

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Resources</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={`px-5 py-2 rounded-full border text-sm bg-gray-500 shadow-xl font-medium transition-all duration-300 ${
              activeTab === category
                ? "bg-blue-500 text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentResources.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
              <span>{item.category}</span>
              <span>{item.date}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4  mt-20">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? "text-gray-400 border-gray-200"
                : "text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          {/* Page numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md border text-sm ${
                  currentPage === i + 1
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200"
                : "text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
