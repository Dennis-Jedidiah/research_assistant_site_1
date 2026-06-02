import Features from "./components/Features";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";

const App = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        <Features />
        <PricingSection />
      </div>
      {/* <div className="text-8xl">Heading</div>
      <div className="text-6xl">Hello!</div>
      <div className="text-3xl">Subheading</div>
      <div className="text-base">Body Text!!</div> */}
    </>
  );
};

export default App;
