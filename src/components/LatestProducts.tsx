import { Heart } from "lucide-react";
import image from "../images/trendingproduct.jpg";
import image2 from "../images/trendingproduct2.jpg";

const LatestProducts = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-6 lg:py-24 lg:px-28">
      <h2 className="pb-12 text-3xl md:text-4xl lg:text-5xl">
        Latest Products
      </h2>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="flex flex-col justify-center items-start gap-6">
          {/* Image */}
          <div className="relative w-full h-[400px]">
            <img
              src={image}
              alt="product image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
            <div className="flex flex-row justify-between items-center w-full">
              <h4 className="text-3xl">Product Name</h4>
              <Heart size={28} />
            </div>
            <p className="text-xl text-primary_darkerShade-750">$1000</p>
          </div>
        </div>
        {/* Product 2 */}
        <div className="flex flex-col justify-center items-start gap-6">
          {/* Image */}
          <div className="relative w-full h-[400px]">
            <img
              src={image2}
              alt="product image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
            <div className="flex flex-row justify-between items-center w-full">
              <h4 className="text-3xl">Product Name</h4>
              <Heart size={28} />
            </div>
            <p className="text-xl text-primary_darkerShade-750">$1000</p>
          </div>
        </div>
        {/* Product 3 */}
        <div className="flex flex-col justify-center items-start gap-6">
          {/* Image */}
          <div className="relative w-full h-[400px]">
            <img
              src={image}
              alt="product image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
            <div className="flex flex-row justify-between items-center w-full">
              <h4 className="text-3xl">Product Name</h4>
              <Heart size={28} />
            </div>
            <p className="text-xl text-primary_darkerShade-750">$1000</p>
          </div>
        </div>
        {/* Product 4 */}
        <div className="flex flex-col justify-center items-start gap-6">
          {/* Image */}
          <div className="relative w-full h-[400px]">
            <img
              src={image2}
              alt="product image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
            <div className="flex flex-row justify-between items-center w-full">
              <h4 className="text-3xl">Product Name</h4>
              <Heart size={28} />
            </div>
            <p className="text-xl text-primary_darkerShade-750">$1000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
