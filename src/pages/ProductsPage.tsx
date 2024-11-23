import productsimg from "../images/productdetailimage2.jpg";

const ProductsPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 lg:px-28">
      <div className="relative w-full h-[300px] lg:h-[400px]">
        <img
          src={productsimg}
          alt="products image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default ProductsPage;
