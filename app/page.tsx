import AboutUs from "@/views/AboutUs";
import CTA from "@/views/CTA";
import Events from "@/views/Events";
import Features from "@/views/Features";
// import Header from "@/views/Header";
import Hero from "@/views/Hero";
import Merch from "@/views/Merch";
import Sponsors from "@/views/Sponsors";
import Testimonials from "@/views/Testimonials";


export default function Home() {
  return (
    <div>
      <div className=" lg:max-w-7xl mx-auto">
        <Hero />
      <AboutUs />
      <Features />
      <Events />
      <Merch />
      <Testimonials />
      <Sponsors />
      <CTA />
      </div>
      
    </div>
  );
}
