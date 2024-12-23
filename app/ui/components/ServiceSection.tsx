import services from "@/app/data/services";
import ServiceCard from "@/app/ui/components/ServiceCard";

export default function ServiceSection() {
  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-2xl text-slate-700 font-bold text-center mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}
