const LatestProducts = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-6 lg:px-28">
      <h2 className="pb-12 text-3xl md:text-4xl lg:text-5xl">
        Latest Products
      </h2>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div>
          {/* Image */}
          <div>
            <p>Image</p>
          </div>
          {/* Text */}
          <div>
            <p>Text</p>
          </div>
        </div>
        {/* Product 1 */}
        <div>
          {/* Image */}
          <div>
            <p>Image</p>
          </div>
          {/* Text */}
          <div>
            <p>Text</p>
          </div>
        </div>
        {/* Product 1 */}
        <div>
          {/* Image */}
          <div>
            <p>Image</p>
          </div>
          {/* Text */}
          <div>
            <p>Text</p>
          </div>
        </div>
        {/* Product 1 */}
        <div>
          {/* Image */}
          <div>
            <p>Image</p>
          </div>
          {/* Text */}
          <div>
            <p>Text</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
