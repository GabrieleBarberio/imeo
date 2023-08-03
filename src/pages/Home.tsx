import Footer from "../component/landing/Footer";
import AboutUs from "../component/landing/AboutUs";
import { CallToAction } from "../component/landing/CallToAction";

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
