export const CallToAction = () => {
  return (
    <>
      <div className=" flex flex-col max-w-mww mx-auto py-64 relative z-10 mww:px-0 px-12">
        <h1 className="font-title text-6xl font-black text-landing-pink">
          Unlock peak team communication
        </h1>
        <br />
        <span className="block font-title text-[#D9D9D9] text-2xl break-words font-bold">
          Join our ultimate team communication app:
          <br />
          Collaborative Live Coding Editor, Split into Groups, share your code
          <br />
          with IMEO Community!
        </span>
        <br />
        <div className="flex gap-8 w-fit">
          <button className="px-10 py-3 min-w-[190px] rounded-[14px] text-xl text-white font-bold bg-secondary-100 hover:bg-green-400">
            Registrati
          </button>
          <button className="px-10 py-3 min-w-[190px] rounded-[14px] text-xl text-[#8076A9] font-bold bg-white hover:bg-gray-200">
            APP
          </button>
        </div>
      </div>
    </>
  );
};
