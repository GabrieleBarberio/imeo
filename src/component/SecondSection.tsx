import bannerspec from "../assets/chat.png";
import line from "../assets/line.png";

export const SecondSection = () => {
  return (
    <div className=" flex max-w-mww py-64 mx-auto relative z-10 mww:px-0 px-12">
      <div className="flex flex-col justify-center gap-8 flex-1 relative">
        <div className="absolute left-[-80px] bottom-6 lines:block hidden">
          <img src={line} alt="" />
        </div>
        <h3 className="font-title text-3xl text-landing-green font-black">
          Unlock your creativity with our Live Editor!
        </h3>
        <span className="block font-title text-[#D9D9D9] text-xl break-words font-bold">
          Seamlessly switch universes, enjoy automatic language
          <br />
          recognition, and lightning-fast stability.
          <br />
          Elevate your storytelling now!
        </span>
      </div>
      <div className="flex-1">
        <img className="max-w-full h-auto" src={bannerspec} />
      </div>
    </div>
  );
};
