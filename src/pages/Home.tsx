import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";
import { CallToAction } from "../component/CallToAction";

export const Home = () => {
  return (
    <>
      <div className="w-[100vw]   bg-[#000814]">
        <CallToAction />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
};
