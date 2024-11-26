import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 lg:px-28 lg:py-24 bg-primary_darkerShade-900 text-primary_lighterShade-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-32 lg:py-8">
        <div className="grid grid-cols-1 place-content-start gap-4">
          <h4 className="text-2xl md:text-3xl">Furnico</h4>
          <p className="leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            non dolore praesentium adipisci, ipsum, beatae officia natus error
            expedita numquam provident, molestias odio sequi enim voluptate
            obcaecati saepe atque eaque!
          </p>
        </div>
        <div className="grid grid-cols-1 place-content-start gap-4">
          <h4 className="text-xl md:text-2xl">Quick Links</h4>
          <div className="grid grid-cols-1 place-content-start gap-2">
            <a href="/">Products</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Home</a>
          </div>
        </div>
        <div className="grid grid-cols-1 place-content-start gap-4">
          <h4 className="text-xl md:text-2xl">Favorite Products</h4>
          <div className="grid grid-cols-1 place-content-start gap-2">
            <a href="/">Product #1</a>
            <a href="/">Product #2</a>
            <a href="/">Product #3</a>
            <a href="/">Product #4</a>
          </div>
        </div>
        <div className="grid grid-cols-1 place-content-start gap-4">
          <h4 className="text-xl md:text-2xl">Favorite Products</h4>
          <div className="grid grid-cols-1 place-content-start gap-2">
            <a href="/">Product #1</a>
            <a href="/">Product #2</a>
            <a href="/">Product #3</a>
            <a href="/">Product #4</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-8">
        <div className="py-8">
          <p>© Furnico</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <Instagram />
          <Facebook />
          <Youtube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
