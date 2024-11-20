import { MenuIcon, SearchIcon, ShoppingBag, User, X } from "lucide-react";
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
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        {/* Icons */}
        <div className="flex justify-center items-center gap-3">
          <ShoppingBag />
          <User />
          <SearchIcon />
          {/* Hamburger Menu */}
          <div onClick={handleClick} className="md:hidden z-40">
            {!nav ? <MenuIcon /> : <X />}
          </div>
        </div>
        {/* Mobile Menu */}
        <ul
          onClick={handleClick}
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center gap-8 md:gap-16 bg-primary_lighterShade-300 z-30"
          }
        >
          <Link to="/" className="text-5xl">
            Home
          </Link>
          <Link to="/products" className="text-5xl">
            Products
          </Link>
          <Link to="/about" className="text-5xl">
            About
          </Link>
          <Link to="/contact" className="text-5xl">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
