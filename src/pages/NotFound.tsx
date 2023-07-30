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
        <div className=" relative">
          <img src={fumetto} alt="" />
          <span> il cosmo è immenso...</span>
          <span> sembra proprio che ti sia perso</span>
          <span>cliccami per tornare a casa!</span>
        </div>
      </div>
      <div className=" absolute bottom-[150px] right-[580px] ">
        <Link to="/">
          <img className="w-[300px]" src={mascotte} alt="" />{" "}
        </Link>
      </div>
    </div>
  );
};
