import { Link } from "react-router-dom";
import logoimeo from "../../assets/logoimeo.png";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((_isMenuOpen) => !_isMenuOpen);
  };

  return (
    <nav className="bg-blacky-100">
      <div className="2xl:max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 h-[80px]">
        <div className="md:hidden">
          <button className="site-secondary" onClick={handleMenuClick}>
            MENU
          </button>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src={logoimeo} className="w-[120px]" alt="imeo logo" />
          </Link>
        </div>

        <div className="hidden md:flex gap-3 text-white text-md font-semibold">
          <Link to="design">
            <span>Design System</span>
          </Link>
          <Link to="*">
            <span>Imeo Project</span>
          </Link>
          <Link to="*">
            <span>About Us</span>
          </Link>
        </div>

        <div className=" md:block">
          <button className="site-secondary">APP</button>
        </div>
      </div>
      {/* HAMBURGER MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white text-md font-semibold py-4 px-8">
          <Link to="design" onClick={handleMenuClick}>
            <div className="my-2">Design System</div>
          </Link>
          <Link to="*" onClick={handleMenuClick}>
            <div className="my-2">Imeo Project</div>
          </Link>
          <Link to="*" onClick={handleMenuClick}>
            <div className="my-2">About Us</div>
          </Link>
        </div>
      )}
    </nav>
  );
};
