import { useBookingContext } from "../functions/context/BookingContext";

const PriceCard = ({ title, price, desc, listItems = [], buttonText = "Select" }) => {
    const { selectPackage } = useBookingContext();

    return (
        <div className="lg:shadow-md bg-white col-span-4 shadow-xl/20 my-4 px-4 py-8 rounded-md">
            <div className="flex flex-row items-end justify-between gap-2 mb-2">
                <h3 className="text-2xl font-heading font-medium">{title}</h3>
                <p className="text-porcelain-700">{price}</p>
            </div>
            <p className="font-extralight my-2">{desc}</p>
            <ul className="list-decimal list-inside my-2">
                {listItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button
                className="w-full rounded-md bg-verdigris-200 text-center p-1 my-2"
                onClick={() => selectPackage(title)}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default PriceCard;
