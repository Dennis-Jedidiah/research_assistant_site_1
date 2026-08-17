import SolidButton from "./ComponentParts/Button_solid";
import { move_to_section } from "../functions/Pretty_design_functions";
import Hero_image from "../assets/Hero_Image.svg";

const Hero = () => {
  return (
    <div className="h-screen flex flex-row items-end justify-center" id="header">
      <div className="flex flex-col justify-center gap-5 pl-25 py-5 h-full w-1/2">
        <span className="space-y-2">
          <h1 className="text-6xl heading-font py-3 text-custom-black-500 text-shadow-lg">
            Career Guidance,
            <br />
            Just for You!
          </h1>
          <span className="text-lg">
            Supporting executives, professionals, researchers, and students in
            building impactful résumés, academic portfolios, graduate
            applications, defense slideshows, and thesis/dissertation materials.
          </span>
        </span>
        <span className="w-fit">
          <SolidButton
            children="Get Started"
            className="shadow-md text-white"
            onClick={() => move_to_section("meet_instructor")}
          />
        </span>
      </div>
      <div className = "flex-1">
        <img src={Hero_image} alt="Hero" className="w-full object-cover"/>
      </div>
      <div/>
    </div>
  );
};

export default Hero;
