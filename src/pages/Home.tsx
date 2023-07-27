import { CallToAction } from "../component/CallToAction";
import AboutUs from "../component/AboutUs";

export const Home = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]  bg-[#000814]">
        <CallToAction />
        <AboutUs />
      </div>
    </>
  );
};
