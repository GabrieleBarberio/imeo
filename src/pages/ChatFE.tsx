import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";
import { BodyChat } from "../component/BodyChat";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SendForm } from "../component/SendForm";
import { useDispatch, useSelector } from "react-redux";
import { Message, addMessage, setMessages } from "../store/messageSlice";
import { RootState } from "../store";

// type Chat = m[];

/**
 *
 * room: room ,
 * messagges: []
 * filter
 */

export const ChatFE = () => {
  const messages = useSelector((s: RootState) => s.chat.messages);
  const author = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const [recipientId, setRecipientId] = useState<string>("");
  const room = `${recipientId}-${author._id}`;
  const chatURL = `http://localhost:3030/api/chat/`;
  const socket: Socket = io("http://localhost:3030"); // Connessione socket al server

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${chatURL}/${room}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${author.token}`,
        },
      });
      const history = await res.json();
      dispatch(setMessages(history));
      console.log("history:", history);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (recipientId !== "") fetchMessages();
  }, [recipientId]);

  useEffect(() => {
    socket.emit("joinRoom", room); //commessione alla room"Room"  da rednere dinamico in base agli utenti

    socket.on("chatMessage", (message: Message) => {
      console.log("user connect", author);

      // console.log(message);
    });

    return () => {
      socket.disconnect(); // Chiudi la connessione WebSocket quando il componente è smontato
    };
  }, []); // Connessione aperta quando il componente viene montato

  const handleSendMessage = (content: string) => {
    const message: Message = {
      author: author,
      content,
      from: author._id,
      to: recipientId,
    };
    console.log("author:", author);
    console.log("author id:", author._id);

    // Ricezione dei messaggi dal server
    dispatch(addMessage(message));
    console.log("author:", author);
    console.log("message:", message);

    socket.emit("chatMessage", message);
  };

  const handleClicked = (_id: string): void => {
    // console.log(_id);
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
              <div>
                <BodyChat messages={messages} />

                <SendForm onSubmit={handleSendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
