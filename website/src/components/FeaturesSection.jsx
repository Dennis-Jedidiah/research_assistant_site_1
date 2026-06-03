import FeatureCard from "./ComponentParts/FeaturesCard";

const Features = () => {
  return (
    <div className="container h-auto flex flex-col gap-15 pb-15">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-base text-gray-500">hello</div>
        <div className="text-4xl">Features</div>
        <div className="text-center max-w-4xl">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </div>
      </div>
      <div className="flex justify-between w-full">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;
