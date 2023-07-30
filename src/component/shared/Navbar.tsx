import { Link } from "react-router-dom";
import logoimeo from "../../assets/logoimeo.png";

export const Navbar = () => {
  return (
    <nav className="w-screen bg-blacky-100 ">
      <div className=" 2xl:max-w-[1440px] h-[80px] 2xl:flex justify-between 2xl:items-center mx-auto">
        <div className=" flex justify-center items-center">
          <Link to="/">
            <img src={logoimeo} className="w-[120px]" alt="" />
          </Link>
        </div>
        <div className="flex gap-3 text-white text-2xl font-semibold">
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
        <div>
          <button className="site-secondary"> APP </button>
        </div>
      </div>
    </nav>
  );
};
