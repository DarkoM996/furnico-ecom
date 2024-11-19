import { Button } from "./ui/button";
import backgroundimage from "../images/hero.jpg";

const Hero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-81px)] relative px-6 py-8 lg:px-28">
      {/* Grid */}
      <div className="flex flex-col justify-start items-center gap-6 md:gap-12 w-full h-fit">
        {/* image */}
        <div className="relative w-full h-[500px] lg:h-[600px]">
          <img
            src={backgroundimage}
            alt="hero image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        {/* Text container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Feeling The Comfort Of Resting Comfortably Using FurniPro
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 md:gap-6 lg:w-1/3 h-fit">
            <p>
              Comfort in your own home shouldn`t be something that bothers you.
              Make that the problem of the past by looking through our curated
              collection
            </p>
            <div className="flex flex-row justify-center items-center gap-2">
              <Button className="p-6 rounded-full bg-black">Get Started</Button>
              <Button className="p-6 rounded-full bg-primary_lighterShade-400 text-black hover:bg-primary_lighterShade-500">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
