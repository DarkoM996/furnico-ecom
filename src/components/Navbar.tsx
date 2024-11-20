import { MenuIcon, SearchIcon, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-primary_lighterShade-100">
      <div className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center px-6 lg:px-28">
        <div>
          <h4 className="text-2xl md:text-3xl">Furnico</h4>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-4">
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </ul>
        {/* Icons */}
        <div className="hidden md:flex justify-center items-center gap-3">
          <MenuIcon />
          <ShoppingBag />
          <SearchIcon />
        </div>
        {/* Hamburger Menu */}
        <div className="flex gap-2 md:hidden">
          <MenuIcon />
          <ShoppingBag />
        </div>
        {/* Mobile Menu */}
      </div>
    </nav>
  );
};

export default Navbar;
