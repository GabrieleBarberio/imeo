import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";
import { Bubble } from "../component/Bubble";
import { SendForm } from "../component/SendForm";

export const ChatFE = () => {
  return (
    <>
      <div className="flex w-4/4 bg-blacky-300">
        <Sidebar />
        <div className="w-3/4">
          <Header />
          <div className="bg-blacky-300">
            <div className="flex-col items-center">
              <div className=" h-[460px] mr-3 ml-2 mt-3">
                <Bubble />
              </div>
              <div className="flex justify-center ">
                <SendForm />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
