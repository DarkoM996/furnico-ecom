import { Button } from "./ui/button";
import backgroundimage from "../images/hero.jpg";

const Hero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-81px)] relative px-6 py-8 lg:px-28">
      {/* Grid */}
      <div className="flex flex-col justify-start items-center gap-6 md:gap-12">
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
          <div className="flex flex-col justify-center items-start gap-4 md:gap-6 lg:w-1/3">
            <p>
              Comfort in your own home shouldn`t be something that bothers you.
              Make that the problem of the past by looking through our curated
              collection
            </p>
            <div className="flex gap-2">
              <Button>Sample Action</Button>
              <Button>Sample Action</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
