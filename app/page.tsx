import Image from "next/image";
import ServiceSection from "@/app/ui/components/ServiceSection";
import HeroSection from "@/app/ui/components/HeroSection";

export default function Home() {
  return (
    <div className="lg:w-10/12 sm:w-full mx-auto">
      {/* Hero section */}
      <HeroSection />

      

      {/* Service section */}
      <ServiceSection />
    </div>
  );
}
