import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 lg:px-28 lg:py-24 bg-primary_darkerShade-900 text-primary_lighterShade-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-32">
        <div>
          <h4>Furnico</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            non dolore praesentium adipisci, ipsum, beatae officia natus error
            expedita numquam provident, molestias odio sequi enim voluptate
            obcaecati saepe atque eaque!
          </p>
        </div>
        <div>
          <h4>Other Value</h4>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
        </div>
        <div>
          <h4>Other Value</h4>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
        </div>
        <div>
          <h4>Other Value</h4>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
          <a href="/">Link 1</a>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-8">
        <div className="py-8">
          <p>Some title here</p>
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
