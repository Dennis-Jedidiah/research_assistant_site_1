import PricingCard from "./ComponentParts/PricingCard";
import VerticalDivider from "./ComponentParts/VerticalLine";

const Features = () => {
  return (
    <div className="container h-auto my-5 flex flex-col items-center justify-center gap-2">
      <div className="text-base text-gray-500">Header</div>
      <div className="text-2xl">Features</div>
      <div>
        lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
        sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
        amet
      </div>
      <div className = "flex justify-evenly w-full">
        <PricingCard width = "w-3/12"/>
        <PricingCard width = "w-3/12"/>
        <PricingCard width = "w-3/12"/>
      </div>
    </div>
  );
};

export default Features;
