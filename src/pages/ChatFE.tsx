import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";
import { Bubble } from "../component/Bubble";
import { SendForm } from "../component/SendForm";

interface Message {
  author: string;
  text: string;
}

export const ChatFE = () => {
    //in delle utility
 
  //!!** scrivo array con i messaggi e poi fai ritornare col map usando il bubble

  // const handleSendMessage = (text: string) => {
  //   const message: Message = { author, text };
  //   socket.emit("chatMessage", message);
  // };

  return (
    <>
      <div className="flex max-w-screen  max-h-screen bg-blacky-300">
        <Sidebar />
        <div className="w-3/4">
          <Header />
          <div className="bg-blacky-300 ">
            <div className="flex-col w-4/4 items-center">
              <div className=" h-[460px] mr-3 ml-2 mt-3">
                <Bubble />
              </div>
              
                <SendForm  /> 
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
