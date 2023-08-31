import logoimeo from "../assets/banner-footer.png";

function Footer() {
  return (
    <>
      <div className="flex flex-col  bg-[#F5ECFF33] relative z-10">
        <div className="flex justify-center items-center gap-24 max-w-mww w-full mx-auto py-10">
          <div className="flex items-center">
            <img
              className="m-0 max-w-[16vw] h-auto"
              src={logoimeo}
              alt="Footer logo"
            />
          </div>
          <span className="text-white text-xl ">
            Develhope corso Full-Stack FS13 Team-1 IMEO Project
          </span>
        </div>
        <span className="text-[#FFFFFF] text-xl text-center">
          © 2023 IMEO, Inc. , Terms & Condition Here. P.iva 14323141341
        </span>
      </div>
    </>
  );
}

export default Footer;
