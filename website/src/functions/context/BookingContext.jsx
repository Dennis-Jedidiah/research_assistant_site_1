import { createContext, useContext, useState } from "react";

export const BookingContext = createContext("default value");

export const BookingProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState("");

  const selectPackage = (packageName) => {
    setSelectedPackage(packageName);
    document.getElementById("book_a_session")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BookingContext.Provider value={{ selectedPackage, selectPackage }}>
      {children}
    </BookingContext.Provider>
  );
};

export const getBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
