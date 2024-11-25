import { Heart } from "lucide-react";
import products from "../data/products.json";
import { LatestProduct } from "./LatestProduct";

const LatestProducts = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-10 lg:py-24 lg:px-28">
      <h2 className="pb-12 text-3xl md:text-4xl lg:text-5xl">
        Latest Products
      </h2>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {products.map((product) => (
          <LatestProduct key={product.id} {...product} icon={<Heart />} />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
