import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ResourceCardProps {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ category, date, title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">{category}</span>
          <span>{date}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
          Access Resource
        </button>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
