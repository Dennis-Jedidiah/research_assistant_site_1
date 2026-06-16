import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import InstructorSection from "./components/InstructorSection";
import HowitworksSection from "./components/HowItWorks";
import Packages from "./components/PackageSection";
import SoloServices from "./components/SoloServicesSection";
import Footer from "./components/FooterSection";
import BookASession from "./components/BookASession";
// import Services from "./components/ServiceSection";

const App = () => {
  return (
    <div className="bg-slate-100/10">
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
