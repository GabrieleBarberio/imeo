import bannerspec from "../../assets/banner firsdt imeo spec.png"
import bannereditor from "../../assets/bannereditor.png"

export const CallToAction = () => {
  return (
    <>
      <div className=" flex flex-col pt-[12vw] mb-[12vw] pr-[12vw] pl-[12vw]">
        <h1 className="font-title text-[3vw] font-bold text-landing-pink">
          Unlock peak team communication
        </h1>
        <br/>
        <span className="block font-title text-[#D9D9D9] text-[2vw] break-words">
        Join our ultimate team communication app:
        <br/>
        Collaborative Live Coding Editor, Split into Groups, share your code
        <br/>
        with IMEO Community!
        </span>
        <br/>
        <div className="flex gap-[2vw]">
          <button className="px-14 py-4  rounded-[14px] text-xl text-white font-bold bg-secondary-100 hover:bg-green-400">Registrati</button>
          <button className="px-20 py-4 rounded-[14px] text-xl text-[#8076A9] font-bold bg-white hover:bg-gray-200">APP</button>
        </div>
      </div>

      <div className=" flex flex-col pt-[10vw] mb-[12vw] pr-[12vw] pl-[12vw]">
        <h2 className="font-title text-[1.5vw] font-bold text-landing-green">Unlock your creativity with our Live Editor!</h2>
        <div className="flex justify-between mt-[1.6vw]">
          <span className="block font-title text-[#D9D9D9] text-[1.4vw] break-words">Seamlessly switch universes,<br/>
            enjoy automatic language<br/>
            recognition, and lightning-fast<br/>
            stability.
            <br/>
            Elevate your storytelling now!
          </span>
          <div className="w-[40vw]">
            <img className="max-w-full h-auto" src={bannerspec} />
          </div>
        </div>
      </div>

      <div className=" flex flex-col pt-[10vw] mb-[12vw] pr-[12vw] pl-[12vw]">
        <h2 className="ml-auto font-title text-[1.5vw] font-bold text-landing-blue">Unleash the Power of Teamwork</h2>
        <div className="flex justify-between mt-[1.6vw]">
          <div className="w-[40vw]">
            <img className="max-w-full h-auto" src={bannereditor} />
          </div>
          <span className="block mr-[2vw] font-title text-[#D9D9D9] text-[1.4vw] text-center break-words"> Unite your team's talents and<br/>
           watch success unfold. Join<br/>
           forces with our app now!
          </span>
        </div>
      </div>
    </>
  );
};
