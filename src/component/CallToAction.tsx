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
    </>
  );
};
