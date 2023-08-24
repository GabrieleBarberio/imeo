import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";

export const ChatFE = () => {
  return (
    <>
      <div className="flex w-4/4 bg-blacky-300">
        <Sidebar />
        <div className="w-3/4">
          <Header />
          <div className="bg-blacky-300">
            <div className="flex-col items-center">
              <div className="border-2 h-[60vh] mr-3 ml-2 mt-1">
                <h1 className="text-white"> Hello</h1>
              </div>
              <div className="flex justify-center">
                <form className="w-[1000px] flex items-center">
                  <input
                    className="w-full mt-10 ml-2 mr-3 border-none p-4 rounded-lg bg-secondary-400 "
                    type="text"
                    placeholder="Scrivi un messaggio"
                  />
                  <button type="submit" 
                          className="border-none p-4 rounded bg-secondary-400  mt-10">  
                          Send
                          </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
