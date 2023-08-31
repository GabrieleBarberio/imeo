import { Navbar } from "../component/shared/Navbar";
import bgImage from "../assets/bg-stellar.png";
import { LogoSection } from "../component/LogoSection";
import { ThirdSection } from "../component/ThirdSection";
import { SecondSection } from "../component/SecondSection";
import { CallToAction } from "../component/CallToAction";
import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";

export const Home = () => {
  return (
    <>
      <div className="relative bg-[#000814]">
        <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
          <img className="object-cover w-full h-full" src={bgImage} alt="" />
        </div>
        <Navbar />
        <CallToAction />
        <SecondSection />
        <ThirdSection />
        <LogoSection />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
};
