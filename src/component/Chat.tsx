import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client"; // Assicurati che io e Socket siano importati dal modulo corretto
import { Body } from "./BodyChat";
import { SendForm } from "./SendForm";
import { useSelector } from "react-redux";

interface Message {
  author: string;
  text: string;
}

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const author = useSelector((s) => s.auth.user_name); // Dovrà essere dinamico in base a chi ha fatto il login (?) Utilizziamo Redux

  const socket: Socket = io("http://localhost:3030"); // Connessione socket al server

  useEffect(() => {
    socket.on("chatMessage", (message: Message) => {
      console.log("user connect");

      // Ricezione dei messaggi dal server
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message);
    });

    return () => {
      socket.disconnect(); // Chiudi la connessione WebSocket quando il componente è smontato
    };
  }, []); // Connessione aperta quando il componente viene montato

  const handleSendMessage = (text: string) => {
    const message: Message = { author, text };
    socket.emit("chatMessage", message);
  };

  return (
    <div>
      <h1>Chat</h1>
      <Body messages={messages} />
      <SendForm onSubmit={handleSendMessage} />
    </div>
  );
};
