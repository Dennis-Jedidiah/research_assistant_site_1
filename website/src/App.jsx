import Features from "./components/FeaturesSection";
import Footer from "./components/FooterSection";
import Hero from "./components/HeroSection";
import PricingSection from "./components/PricingSection";

const App = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        <Features/>
        <PricingSection/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
