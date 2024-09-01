import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="flex flex-col xl:flex-row gap-8">
        {/* First image with larger span */}
        <div className="relative xl:w-2/3">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__1.webp"
            alt="hero"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 capitalize">
            <p className="text-2xl hidden sm:block">100% Original dry fruits</p>
            <h2 className="capitalize text-2xl sm:text-4xl md:text-6xl font-bold">
              dried fruits best quality
            </h2>
            <p className="capitalize text-gray-500 text-xl pt-4 sm:pt-8">
              Starting at
            </p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pd-8 pb-4">
              $18.23
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer capitalize">
              shop now <BsArrowRight />
            </div>
          </div>
        </div>

        {/* Container for the second and third images */}
        <div className="flex flex-col gap-8 xl:w-1/3">
          {/* Second image */}
          <div className="relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/hero__2.webp"
              alt="hero img"
            />

            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 capitalize">
              <h2 className="capitalize text-2xl sm:text-3xl font-bold">
                Best Yummy chips
              </h2>
              <p className="capitalize text-gray-500 text-xl pt-4">
                Starting at
              </p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pd-8">
                $23
              </div>
              <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer capitalize">
                shop now <BsArrowRight />
              </div>
            </div>
          </div>

          {/* Third image */}
          <div className="relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/hero__3.webp"
              alt="hero img"
            />

            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 capitalize">
              <h2 className="capitalize text-2xl sm:text-3xl font-bold">
                Best Yummy Pizza
              </h2>
              <p className="capitalize text-gray-500 text-xl pt-4">
                Starting at
              </p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pd-8">
                $10
              </div>
              <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer capitalize">
                shop now <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
