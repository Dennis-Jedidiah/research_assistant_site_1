import SolidButton from "./SolidButton";

const PricingCard = ({width}) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${width || 'w-fit'}`}>
      <div className="text-base">Pricing Plan</div>
      <div className="text-3xl font-bold">$19.99</div>
      <div className="text-gray-500">per month</div>
      <div>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <SolidButton />
    </div>
  );
};

export default PricingCard;
