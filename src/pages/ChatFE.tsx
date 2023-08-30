import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";
import { BodyChat } from "../component/BodyChat";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SendForm } from "../component/SendForm";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setMessages } from "../store/messageSlice";

interface Message {
  author: object;
  text: string;
  from: string;
  to: string;
}
interface AuthState {
  token: string;
  user_name: string;
  _id: string;
}

/**
 *
 * room: room ,
 * messagges: []
 * filter
 */

export const ChatFE = () => {
  // const [messages, setMessages] = useState<Message[]>([]);
  const messages = useSelector((s) => s.messages);
  const author: AuthState = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const [recipientId, setRecipientId] = useState<string>("");
  const room = `${recipientId}-${author._id}`;
  const chatURL = `http://localhost:3030/api/chat/${room}`;
  const socket: Socket = io("http://localhost:3030"); // Connessione socket al server

  const fetchMessages = async () => {
    try {
      const res = await fetch(chatURL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${author.token}`,
        },
      });
      const messages = await res.json();
      dispatch(setMessages(messages));
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.emit("joinRoom", room); //commessione alla room"Room"  da rednere dinamico in base agli utenti

    socket.on("chatMessage", (message: Message) => {
      console.log("user connect", author);

      // Ricezione dei messaggi dal server
      dispatch(addMessage(message));

      console.log(message);
    });

    return () => {
      socket.disconnect(); // Chiudi la connessione WebSocket quando il componente è smontato
    };
  }, []); // Connessione aperta quando il componente viene montato

  useEffect(() => {
    fetchMessages();
  }, [recipientId]);

  const handleSendMessage = (text: string) => {
    const message: Message = {
      author: author,
      text,
      from: author._id,
      to: recipientId,
    };
    console.log(author);

    socket.emit("chatMessage", message);
  };

  const handleClicked = (_id: string): void => {
    console.log(_id);
    setRecipientId(_id);
  };
  return (
    <>
      <div className="h-screen w-screen bg-blacky-300">
        <div className="flex  w-full">
          <Sidebar handleClicked={handleClicked} />
          <div className="w-3/4">
            <Header />
            <div>
              <div className="">
                {messages && <BodyChat messages={messages} />}
                <SendForm onSubmit={handleSendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
