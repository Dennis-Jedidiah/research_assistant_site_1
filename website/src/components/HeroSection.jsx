import SolidButton from "./ComponentParts/SolidButton";

const Hero = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-100 to-white mb-15">
      <div className="flex flex-col justify-center items-center gap-5 py-5 min-h-[100vh]">
        <span className="flex flex-col items-center justify-center gap-3">
          <span className="text-gray-500 text-base">
            lorem ipsum dolor sit amet
          </span>
          <h1 className="text-8xl">Hello, World!</h1>
          <span className="text-gray-500 text-3xl">Welcome to my website.</span>
        </span>
        <span className="w-fit">
          <SolidButton label="Get Started" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
