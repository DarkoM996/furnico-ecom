import image from "../images/alice-kang-Bc_uN5PeErA-unsplash.jpg";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-81px)] relative px-6 py-8 lg:px-28">
      <div className="relative h-full">
        <img
          src={image}
          alt="error 404 image"
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 md:gap-6 bg-black/40 rounded-3xl">
          <div className="flex flex-col justify-center items-center gap-2 w-full md:w-2/3 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white">
              Error 404
            </h1>
            <p className="text-neutral-200">
              Unfortunately, something went wrong duo to unknown reasons.
            </p>
          </div>
          <Link
            to="/"
            className="px-6 py-4 bg-white rounded-full uppercase text-sm hover:bg-neutral-200"
          >
            Back To Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404Page;
