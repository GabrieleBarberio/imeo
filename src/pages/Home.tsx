import AboutUs from "../component/AboutUs";
import { CallToAction } from "../component/CallToAction";
import bg from "../assets/bg.png";
export const Home = () => {
  return (
    <>
      <div className=" bg-blacky-100">
        <CallToAction />
        <AboutUs />
      </div>
    </>
  );
};
