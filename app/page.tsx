import Image from "next/image";
import ServiceSection from "@/app/ui/components/ServiceSection";

export default function Home() {
  return (
    <div className="lg:w-10/12 sm:w-full mx-auto">
      <div className="w-full border border-slate-200 relative mb-4 ">
        {/* Hero section overlay */}
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
        
        {/* Text overlay in the hero section */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white text-6xl lg:text-8xl font-bold">Välkommen till Nyköpings Moské</h1>
        </div>
        
        {/* Image component for the hero section */}
        <div className="relative">
          <Image
            src="/moske_bild.jpeg" // Replace with the path to your image
            alt="Picture of mosque"
            width={1420} // Set the width to fill the container
            height={300} // Set the desired height for the hero section
            layout="responsive"
            objectFit="cover" // Maintain aspect ratio and fill the container
            objectPosition="50% 50%" // Center the image
            className="object-cover max-h-fit"
          />
        </div>
       
        {/* Service section */}
      </div>
      <ServiceSection />
    </div>
  );
}
