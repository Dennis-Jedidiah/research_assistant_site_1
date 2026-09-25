import About_me from "./sections/AboutMe";
import Contact_section from "./sections/Contact";
import Core_capabilities from "./sections/CoreCapabilities";
import Hero from "./sections/Hero";
import Footer from "./components/Footer"
import Pacakges from "./sections/Packages";
import { BookingProvider } from "./functions/context/BookingContext";

const App = () => {
  return (
    <BookingProvider>
      <div className="grid grid-cols-4 font-thin lg:grid-cols-12">
        <Hero />
        <About_me />
        <Core_capabilities />
        <Pacakges />
        <Contact_section />
        <Footer />
      </div>
    </BookingProvider>
  );
};

export default App;
