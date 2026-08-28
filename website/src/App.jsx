import Navbar from "./components/ComponentParts/Navbar";
import Hero from "./components/Section_hero";
import InstructorSection from "./components/Section_instructors";
import HowitworksSection from "./components/Section_how_it_works";
import Packages from "./components/Section_packages";
import SoloServices from "./components/Section_solo";
import Footer from "./components/Section_footer";
import BookASession from "./components/Section_booking";
import background from "./assets/papyrus.png";
import { BookingProvider } from "./functions/context/BookingContext";

const App = () => {
  return (
    <div
      className="bg-slate-100/10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <BookingProvider>
        <Navbar />
        <Hero />
        <InstructorSection />
        <HowitworksSection />
        <Packages />
        <SoloServices />
        <BookASession />
        <Footer />
      </BookingProvider>
    </div>
  );
};

export default App;
