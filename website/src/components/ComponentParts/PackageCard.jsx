import OutlineButton from "./Button_outline";
import {getBookingContext} from "../../functions/context/BookingContext";

const PackageCard = ({ width, title, body_text, price, package_list }) => {
  const { selectPackage } = getBookingContext();

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-xl shadow-custom-black-300/60 ${width || "w-fit"} flex flex-col gap-3`}
    >
      <div className="text-base font-bold">{title}</div>{" "}
      {/* This is the name of the package plan */}
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold text-custom-blue-500">{price}</div>{" "}
        <div className="text-gray-500">per month</div>
      </div>{" "}
      {}
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
      <div>
        <OutlineButton
          className="w-full transition-all duration-[200ms] ease-in-out hover:bg-custom-blue-500 hover:text-white"
          children="Get Started"
          onClick={() => selectPackage(title)}
        />
      </div>
    </div>
  );
};

export default PackageCard;
