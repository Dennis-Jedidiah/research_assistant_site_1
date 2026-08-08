import OutlineButton from "./Button_outline";
import SolidButton from "./Button_solid";
import { useState } from "react";

const PackageCard = ({ width, title, body_text, price, package_list }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleCheckout = async () => {
    const response = await fetch("http://localhost:5001/checkout", {
      method: "POST",
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("Failed to create checkout session");
      console.log("Data: ", data);
    }
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg drop-shadow-xl/50 drop-shadow-blue-200 ${width || "w-fit"} flex flex-col gap-3`}
    >
      <div className="text-base">{title}</div>{" "}
      {/* This is the name of the package plan */}
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold text-rose-800/60">{price}</div>{" "}
        <div className="text-gray-500">per month</div>
      </div>{" "}
      {/* This is just the billing cycle (per month) */}
      <div className="flex-1">
        {body_text}
        <ul className="my-4">
          {package_list.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>{" "}
      {/* This is a description of the package plan. It will most likely be a list of services. */}
      <div
        className=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transition: "all 0.3s ease" }}
      >
        {!isHovered ? (
          <OutlineButton
            className="w-full"
            children="Get Started"
            onClick={handleCheckout}
          />
        ) : (
          <SolidButton
            className="w-full text-white"
            children="Get Started"
            onClick={handleCheckout}
          />
        )}
      </div>
    </div>
  );
};

export default PackageCard;
