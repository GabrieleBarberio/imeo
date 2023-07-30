import mascotte from "../assets/mascottelogo.png";
import bg from "../assets/bg.png";
import fumetto from "../assets/fum1.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover relative bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div>
        <div className="relative">
          <img src={fumetto} alt="" />
          <span className=" text-blacky-200 text-2xl font-fumetto absolute left-[280px] top-[520px]">
            Il cosmo è immenso...
          </span>
          <span className=" text-blacky-200 text-2xl font-fumetto absolute left-[280px] top-[540px]">
            Sembra proprio che ti sia perso
          </span>
          <span className=" text-blacky-200 text-2xl font-fumetto absolute left-[280px] top-[560px]">
            Cliccami per tornare a casa!
          </span>
        </div>
      </div>
      <div className="absolute top-1/4 right-[200px] sm:top-auto sm:right-auto sm:bottom-10 sm:left-10 lg:top-[580px] lg:right-[-75px]">
        <Link to="/">
          <img className="w-1/5" src={mascotte} alt="" />
        </Link>
      </div>
    </div>
  );
};
