import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  tag: string;
}

const EventCard = ({
  title,
  date,
  location,
  description,
  image,
  tag,
}: EventCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden  hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-50 ">
        <Image src={image} alt={title} fill className="object-cover" />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
        <p className="mt-3 text-sm text-gray-700">{description}</p>
        <a
          href="#"
          className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default EventCard;
