import SolidButton from "./ComponentParts/Button_solid";
import { move_to_section } from "../functions/Pretty_design_functions";
import Hero_image from "../assets/Hero_Image.svg";
import header_bg_mid from "../assets/header_bg_mid.jpg";

const Hero = () => {
  return (
    <div
      className="relative z-5 lg:static h-screen flex flex-col justify-center bg-white lg:flex-row lg:items-end"
      id="header"
    >
      <div className="h-full flex flex-col px-5 justify-center gap-5 lg:pl-25 lg:py-5 lg:w-1/2">
        <span id="hero-text" className="space-y-2">
          <h1 className="text-5xl text-wrap line-clamp-3 lg:line-clamp-none lg:text-6xl heading-font py-3 text-custom-black-500 text-shadow-lg">
            Career Guidance, Just for You!
          </h1>
          <span className="text-base lg:text-lg">
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
      <img
        src={Hero_image}
        alt="Hero"
        className="hidden lg:block lg:flex-1 lg:static lg:w-1/2 lg:object-cover"
      />
      <img
        src={header_bg_mid}
        alt="Header Background"
        className="absolute top-0 h-full z-[-1] object-cover object-left opacity-30 lg:hidden"
      />
    </div>
  );
};

export default Hero;
