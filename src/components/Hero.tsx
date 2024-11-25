import backgroundimage from "../images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-6 lg:px-28">
      {/* Grid */}
      <div className="flex flex-col justify-start items-center gap-6 w-full h-fit">
        {/* image */}
        <div className="relative w-full h-[400px] lg:h-[600px]">
          <img
            src={backgroundimage}
            alt="hero image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        {/* Text container */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 w-full h-1/2 lg:h-1/3">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-7xl lg:leading-tight">
              Feeling The Comfort Of Resting Comfortably Using FurniPro
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 md:gap-6 w-full h-full sm:w-2/3 lg:w-1/3">
            <p>
              Comfort in your own home shouldn`t be something that bothers you.
              Make that the problem of the past by looking through our curated
              collection
            </p>
            <div className="flex flex-row justify-center items-center gap-2">
              <Link
                to="/products"
                className="px-6 py-4 rounded-full bg-black text-primary_lighterShade-50"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-6 py-4 rounded-full bg-primary_lighterShade-400 text-black hover:bg-primary_lighterShade-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
