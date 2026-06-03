import OutlineButton from "./OutlineButton";
import SolidButton from "./SolidButton";
import { useState } from "react";

const PricingCard = ({ width }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md ${width || "w-fit"} flex flex-col gap-4`}
    >
      <div className="text-base">Pricing Plan</div>
      <div className="text-3xl font-bold">$19.99</div>
      <div className="text-gray-500">per month</div>
      <div>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style = {{transition: "all 0.3s ease"}}>
        {!isHovered ? (
          <OutlineButton label="Get Started" />
        ) : (
          <SolidButton label="Get Started" />
        )}
      </div>
    </div>
  );
};

export default PricingCard;
