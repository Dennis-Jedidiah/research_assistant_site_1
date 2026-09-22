import Hero_bg from "../assets/hero-bg.jpg";
const Hero = () => {
  return (
    <>
      <div className="lg:col-span-12 lg:h-125 lg:py-10 lg:bg-center lg:justify-center lg:px-12 text-white flex flex-col h-fit col-span-4 bg-[linear-gradient(rgba(10,10,10,0.5),rgba(10,10,10,0.5)),url(./assets/hero-bg.jpg)] bg-cover py-20 px-4">
        <p className="mb-2">Find a perfect tech solution in the...</p>
        <h1 className="font-heading text-6xl my-4 font-[350]">
          IT One <br /> Stop Shop
        </h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae
          dignissimos autem eos temporibus? Animi dicta minima illum, molestias
          perspiciatis sapiente debitis eum in commodi voluptas voluptatem
          laboriosam atque officiis.
        </p>
      </div>
      {/* <div className="hidden lg:block lg:col-span-6 lg:h-75vh">
        <img src={Hero_bg} className="object-cover" />
      </div> */}
    </>
  );
};

export default Hero;

// lg:bg-verdigris-800