import { ArrowDown } from "lucide-react";
import aboutimage from "../../images/aboutimage.jpg";

const AboutPageHero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-81px)] relative px-6 py-8 md:px-16 lg:px-28">
      <div className="relative w-full h-full">
        <img
          src={aboutimage}
          alt="about image"
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Container with text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50 rounded-3xl text-white">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-14">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-center leading-tight lg:leading-tight lg:w-2/3">
              Feel The Comfort Of Resting Comfortably Using FurniPro
            </h1>
            <div className="flex flex-col justify-center items-center gap-2">
              <button>Swipe Down</button>
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;
