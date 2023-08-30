import { Link } from "react-router-dom";
import logoimeo from "../../assets/logoimeo.png";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((_isMenuOpen) => !_isMenuOpen);
  };

  return (
    <nav className="relative navBefore">
      <div className="2xl:max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 max-h-[92px] relative z-10 max-md:max-h-[50px]">
        <div className="md:hidden">
          <button
            className="site-secondary max-md:px-4 max-md:py-0 max-md:min-w-[80px]"
            onClick={handleMenuClick}
          >
            MENU
          </button>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src={logoimeo} className="max-w-[120px]" alt="imeo logo" />
          </Link>
        </div>

        <div className="hidden md:flex gap-3 text-white text-md font-semibold">
          <Link to="design">
            <span>Design System</span>
          </Link>
        </div>

        <div className=" md:block">
          <Link
            to="/login"
            className="site-secondary min-w-[127px] flex items-center justify-center max-md:px-4 max-md:py-0 max-md:min-w-[80px]"
          >
            APP
          </Link>
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
