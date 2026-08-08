import SolidButton from "./ComponentParts/SolidButton";
import { move_to_section } from "../functions/Pretty_design_functions";

const Hero = () => {
  return (
    <div className="h-screen relaitve z-0" id="header">
      {/* Background Image div */}
      {/* <div
        className="bg-cover bg-center bg-[url(assets/header_bg_mid.jpg)] opacity-90 absolute inset-0 z-10"
        aria-label="Photo by Christina @ wocintechchat.com M"
        id="header_background_image"
      /> */}
      {/* Content positioned above the gradient */}
      <div className="flex flex-col justify-center gap-5 py-5 px-40 h-full opacity-100 relative z-30">
        <span className="space-y-2 w-2/3">
          <h1 className="text-6xl heading-font py-3">
            Career Guidance,
            <br />
            Just for You!
          </h1>
          <span className="text-gray-700 content-font text-lg">
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
      <div className="border-b-1 border-gray-400" />
    </div>
  );
};

export default Hero;
