import image from "../images/categorycard.jpg";
import image2 from "../images/categorycard2.jpg";
import image3 from "../images/aboutimage.jpg";
import { Link } from "react-router-dom";

const BelovedProducts = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-10 lg:py-24 lg:px-28">
      <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-tight pb-12">
        Beloved Products By Our Customers
      </h2>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-fit">
        <div className="relative h-[500px] lg:col-span-4">
          <img
            src={image3}
            alt="beloved product"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative h-[500px] lg:col-span-2">
          <img
            src={image2}
            alt="beloved product"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Text + Link */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black/40 rounded-3xl">
            <h4 className="text-2xl md:text-3xl text-white">Beloved Product</h4>
            <Link
              to="/products"
              className="px-8 py-4 bg-black rounded-full text-primary_lighterShade-100 hover:bg-primary_darkerShade-800"
            >
              See Details
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] lg:col-span-2">
          <img
            src={image}
            alt="beloved product"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BelovedProducts;
