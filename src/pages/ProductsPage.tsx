import productsimg from "../images/productdetailimage2.jpg";
import { Heart } from "lucide-react";
import products from "../data/products.json";

import { LatestProduct } from "./../components/LatestProduct";

const ProductsPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 lg:px-28">
      <div className="relative w-full h-[300px] lg:h-[420px]">
        <img
          src={productsimg}
          alt="products image"
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-baseline bg-black/30 rounded-3xl pl-4 md:pl-12 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-tight text-white">
            Products Page
          </h1>
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 py-8 lg:py-24">
        {products.map((product) => (
          <LatestProduct key={product.id} {...product} icon={<Heart />} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
