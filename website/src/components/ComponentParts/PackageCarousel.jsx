import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PackageCard from "./PackageCard";

const PackageCarousel = ({ packages }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
      swipeable
      emulateTouch
      responsive={{
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 1024, min: 640 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
        },
      }}
      renderArrowPrev={(onClickHandler) => (
        <button
          onClick={onClickHandler}
          className="hidden sm:block lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-custom-blue-300/20 rounded-full transition-all cursor-pointer border-none bg-transparent"
          aria-label="Previous package"
        >
          <svg
            className="w-8 h-8 text-custom-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      renderArrowNext={(onClickHandler) => (
        <button
          onClick={onClickHandler}
          className="hidden sm:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-custom-blue-300/20 rounded-full transition-all cursor-pointer border-none bg-transparent"
          aria-label="Next package"
        >
          <svg
            className="w-8 h-8 text-custom-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    >
      {packages.map((pkg) => (
        <div key={pkg.title} className="px-2">
          <PackageCard {...pkg} />
        </div>
      ))}
    </Carousel>
  );
};

export default PackageCarousel;
