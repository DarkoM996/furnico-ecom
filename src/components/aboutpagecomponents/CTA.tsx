import calltoactionimage from "../../images/hannah-busing-nME9TubZtSo-unsplash.jpg";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-8 md:px-16 md:py-12 lg:px-28 lg:py-24">
      <div className="relative h-screen w-full rounded-3xl">
        <img
          src={calltoactionimage}
          alt="call to action image"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 bg-black/40 rounded-3xl text-white">
          <h2 className="text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-tight text-center w-full sm:w-2/3">
            Explore a wide range of furniture for you
          </h2>
          <Link
            to="/products"
            className="bg-primary_lighterShade-50 border border-black p-6 rounded-full text-black hover:bg-primary_lighterShade-150"
          >
            Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
