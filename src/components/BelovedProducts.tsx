import image from "../images/categorycard.jpg";
import image2 from "../images/categorycard2.jpg";
import image3 from "../images/aboutimage.jpg";

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
