import FeatureCard from "./ComponentParts/FeaturesCard";

const Features = () => {
  return (
    <div className="container h-auto my-5 flex flex-col items-center justify-center gap-2">
      <div className="text-base text-gray-500">hello</div>
      <div className="text-2xl">Features</div>
      <div>
        lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
        sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
        amet
      </div>
      <div className="flex gap-8">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;
