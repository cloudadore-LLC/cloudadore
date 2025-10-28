import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import EventCard from "@/components/EventCard";
const events = [
  {
    id: 1,
    title: "Cloud Architecture Summit 2025",
    date: "September 14, 2025",
    location: "University of Ibadan",
    description:
      "Join industry leaders for insights on next-generation cloud architecture patterns and best practices.",
    image: "/cas25.svg",
    tag: "Conference",
  },
  {
    id: 2,
    title: "AWS Certification Workshop",
    date: "September 14, 2025",
    location: "University of Ibadan",
    description:
      "Intensive hands-on workshop to prepare for AWS Solutions Architect certification exam.",
    image: "/AWSWS25.svg",
    tag: "Workshop",
  },
  {
    id: 3,
    title: "CloudSprint Hackathon 2025",
    date: "September 14, 2025",
    location: "University of Ibadan",
    description:
      "A 48-hour challenge where innovators collaborate to design, develop, and deliver real-world cloud solutions for the future.",
    image: "/CH25.svg",
    tag: "Hackathon",
  },
];

const Events = () => {
  return (
    
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="  md:flex justify-between items-center mb-6">
        <div>
          <h2 className="  text-2xl font-bold">Upcoming Events</h2>
          <p className="text-muted-foreground">
            Join us for exciting events, workshops, and networking opportunities
          </p>
        </div>
        <a href="/events" className="text-primary text-sm hover:underline">
          View All Events →
        </a>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6">
        <EventCard
          title="Cloud Architecture Summit 2025"
          tag="Conference"
          date="September 14, 2025"
          location="University of Ibadan"
          description="Join industry leaders for insights on next-generation cloud architecture patterns and best practices."
          image="/cas25.svg"
        />
        <EventCard
          title="AWS Certification Workshop"
          tag="Workshop"
          date="September 14, 2025"
          location="University of Ibadan"
          description="Intensive hands-on workshop to prepare for AWS Solutions Architect certification exam."
          image="/AWSWS25.svg"
        />
        <EventCard
          title="CloudSprint Hackathon 2025"
          tag="Hackathon"
          date="September 14, 2025"
          location="University of Ibadan"
          description="A 48-hour challenge where innovators collaborate to design, develop, and deliver real-world cloud solutions for the future."
          image="/CH25.svg"
        />
      </div>
    </section>
  );
};

export default Events;
