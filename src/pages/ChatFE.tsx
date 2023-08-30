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
      <div className="flex bg-blacky-300">
        <Sidebar />
        <div className="w-[75%]">
          <Header /> 
        </div>
      </div>
    </>
  );
};
