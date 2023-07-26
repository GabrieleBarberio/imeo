import { CallToAction } from "../component/CallToAction";

export const Home = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]  bg-[#000814]">
        <h1 className="mb-4 w-96 mx-auto text-3xl font-title text-cyan-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r font-handwrite to-cyan-600 from-blue-900">
            Better Type
          </span>
          IMEO
        </h1>
        <p className="text-lg font-paragraph mx-auto w-96 text-gray-500 lg:text-xl dark:text-gray-400">
          Here is the first Home Page from Imeo project!
        </p>
      </div>
    </>
  );
};
