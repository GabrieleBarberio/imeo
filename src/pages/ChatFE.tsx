import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";
import { BodyChat } from "../component/BodyChat";
import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SendForm } from "../component/SendForm";
import { useSelector } from "react-redux";

interface Message {
  author: string;
  text: string;
}
interface AuthState {
  token: string;
  user_name: string;
  _id: string;
}

export const ChatFE = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const author: AuthState = useSelector((s) => s.auth);
  const [recipientId, setRecipientId] = useState<string>("");

  //in delle utility
  // const fetchUserById = async (userId) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3030/api/users/${userId}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${author.token}`,
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch user");
  //     }

  //     const user = await response.json();
  //     return user;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // };
  // fetchUserById(recipientId)
  //   .then((user) => {
  //     console.log("User:", user);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const room = `${recipientId}-${author._id}`;

  const socket: Socket = io("http://localhost:3030"); // Connessione socket al server

  useEffect(() => {
    socket.emit("joinRoom", room); //commessione alla room"Room"  da rednere dinamico in base agli utenti

    socket.on("chatMessage", (message: Message) => {
      console.log("user connect", author);

      // Ricezione dei messaggi dal server
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message);
    });

    return () => {
      socket.disconnect(); // Chiudi la connessione WebSocket quando il componente è smontato
    };
  }, []); // Connessione aperta quando il componente viene montato

  const handleSendMessage = (text: string) => {
    const message: Message = {
      author: author.user_name,
      text,
      from: author._id,
      to: recipientId,
    };
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
