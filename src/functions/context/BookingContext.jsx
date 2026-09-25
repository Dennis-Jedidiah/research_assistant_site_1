import { createContext, useContext, useState } from "react";
import { move_to_section } from "../move_to_section";

// eslint-disable-next-line react-refresh/only-export-components
export const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState("");

  const selectPackage = (packageName) => {
    setSelectedPackage(packageName);
    move_to_section("contact");
  };

  return (
    <BookingContext.Provider value={{ selectedPackage, selectPackage }}>
      {children}
    </BookingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
};
