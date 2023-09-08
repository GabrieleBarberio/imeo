import bannereditor from "../assets/bannereditornew.png";
import line from "../assets/line.png";



export const ThirdSection = () => {
  return (
    <div className="flex max-w-mww mx-auto py-64 relative z-10 mww:px-0 px-12">
      <div className="flex-1">
        <img className="max-w-full h-auto" src={bannereditor} />
      </div>
      <div className="flex flex-col justify-center items-end flex-1 gap-8 relative">
        <div className="absolute right-[-80px] bottom-0 lines:block hidden">
          <img src={line} alt="" />
        </div>
        <h3 className="font-title text-3xl text-landing-blue font-black ">
          Unleash the Power of Teamwork
        </h3>
        <span className="block font-title text-[#D9D9D9] text-xl text-center break-words font-bold">
          Unite your team's talents and watch success unfold. Join
          <br />
          forces with our app now!
        </span>
      </div>
    </div>
  );
};
