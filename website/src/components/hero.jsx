import OutlineButton from "./ComponentParts/OutlineButton";
import SolidButton from "./ComponentParts/SolidButton";

const Hero = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-100 to-white">
      <div className="flex flex-col justify-center items-center gap-5 py-5 min-h-[75vh]">
        <span className="flex flex-col items-center justify-center gap-2">
          <span className="text-gray-500 text-base">
            lorem ipsum dolor sit amet
          </span>
          <h1 className="text-6xl font-bold">Hello, World!</h1>
          <span className="text-gray-500 text-2xl">Welcome to my website.</span>
        </span>
        <SolidButton />
      </div>
    </div>
  );
};

export default Hero;
