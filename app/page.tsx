import AboutUs from "@/views/AboutUs";
import CTA from "@/views/CTA";
import Events from "@/views/Events";
import Features from "@/views/Features";
import Hero from "@/views/Hero";
import Merch from "@/views/Merch";
import Sponsors from "@/views/Sponsors";
import Testimonials from "@/views/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <Events />
      <Merch />
      <Testimonials />
      <Sponsors />
      <CTA />
    </div>
  );
}
