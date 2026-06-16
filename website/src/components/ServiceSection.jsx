import ServiceCard from "./ComponentParts/ServiceCard";

const Services = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center pb-15" id="services">
      <div className="space-y-2 text-center">
        <div className="text-4xl">Services</div>
        <div className="text-center">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </div>
      </div>
      <div className="mt-15 flex justify-between w-2/3">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
