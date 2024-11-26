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
      {/* Filter */}
      <div className="hidden md:flex flex-col md:flex-row py-12">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Products</h2>
        </div>
        <div className="flex flex-row justify-start md:justify-end items-center gap-6 w-full">
          <select
            name="type"
            id=""
            className="px-6 py-4 rounded-full text-sm font-medium bg-primary_lighterShade-200 hover:bg-primary_lighterShade-300"
          >
            <option>Category</option>
            <option value="">New Arrival</option>
            <option value="">Popular</option>
          </select>
          <select
            name="type"
            id=""
            className="px-6 py-4 rounded-full text-sm font-medium bg-primary_lighterShade-200 hover:bg-primary_lighterShade-300"
          >
            <option value="">Color</option>
            <option value="physical">Type</option>
            <option value="digital">Type</option>
          </select>
          <select
            name="type"
            id=""
            className="px-6 py-4 rounded-full text-sm font-medium bg-primary_lighterShade-200 hover:bg-primary_lighterShade-300"
          >
            <option value="">Size</option>
            <option value="physical">Size</option>
          </select>
          {/* Another sort */}
          <div>
            <select
              name=""
              id=""
              className="px-6 py-4 rounded-full text-sm font-medium bg-primary_lighterShade-200 hover:bg-primary_lighterShade-300"
            >
              <option value="">Sort By</option>
              <option value="">Price (low to high)</option>
              <option value="">Price (low to high)</option>
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>
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
