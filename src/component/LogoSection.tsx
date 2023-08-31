import sectionLogo from "../assets/sectionLogo.png";

export const LogoSection = () => {
  return (
    <div className="relative z-10 max-w-mww mx-auto flex items-center justify-center ">
      <div className="bg-[#1E0E1F94] border-4 border-[#4B2B6A] rounded-full">
        <img src={sectionLogo} alt="" />
      </div>
    </div>
  );
};
