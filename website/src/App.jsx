import Navbar from "./components/ComponentParts/Navbar";
import Hero from "./components/Section_hero";
import InstructorSection from "./components/Section_instructors";
import HowitworksSection from "./components/Section_how_it_works";
import Packages from "./components/Section_packages";
import SoloServices from "./components/Section_solo";
import Footer from "./components/Section_footer";
import BookASession from "./components/Section_booking";
import background from "./assets/papyrus.png"

const App = () => {
  return (
    <div
      className="bg-slate-100/10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <Hero />
      <InstructorSection />
      <HowitworksSection />
      {/* <Services /> */}
      <Packages />
      <SoloServices />
      <BookASession />
      <Footer />
    </div>
  );
};

export default App;
