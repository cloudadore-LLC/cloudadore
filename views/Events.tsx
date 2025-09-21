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
    // <div>
    //   <div className="flex flex-col items-center justify-center py-10 outline ">
    //     <section className="flex justify-between outline outline-red-500 w-full">
    //       <div className="flex flex-col">
    //         <span className="font-bold text-[30px] ">Upcoming  events</span>
    //         <span className="text-[12px] text-gray-600">
    //           Join us for exciting events, workshops, and networking <br />
    //           opportunities
    //         </span>
    //       </div>
    //       <div>
    //         <span className="text-blue-900 mr-2 ">View all Events</span>
    //         <span> tag</span>
    //       </div>
    //     </section>
    //     <section></section>
    //   </div>

    // </div>
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <p className="text-muted-foreground">
            Join us for exciting events, workshops, and networking opportunities
          </p>
        </div>
        <a href="#" className="text-primary text-sm hover:underline">
          View All Events →
        </a>
      </div>

      {/* <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden shadow-md rounded-2xl"
          >
            <div className="relative w-full h-48">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                {event.tag}
              </span>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground mt-2">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </div>
              <p className="mt-3 text-sm">{event.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-primary text-sm font-medium hover:underline"
              >
                Learn More →
              </a>
            </CardContent>
          </Card>
        ))}
      </div> */}
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
