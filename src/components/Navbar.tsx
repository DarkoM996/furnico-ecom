import { MenuIcon, SearchIcon, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
        <div onClick={handleClick} className="md:hidden">
          {!nav ? <X /> : <MenuIcon />}
        </div>
        {/* Mobile Menu */}
        <ul className="absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center gap-8 md:gap-16 bg-primary_lighterShade-300">
          <Link to="/" className="text-5xl">
            Home
          </Link>
          <Link to="/" className="text-5xl">
            Products
          </Link>
          <Link to="/" className="text-5xl">
            About
          </Link>
          <Link to="/" className="text-5xl">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
