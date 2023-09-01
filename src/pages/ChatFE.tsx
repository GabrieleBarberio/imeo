import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { Message, addMessage, setMessages } from "../store/messageSlice";
import { RootState } from "../store";

export const ChatFE = () => {
  const messages = useSelector((s: RootState) => s.chat.messages);
  const [recepientNick, setRecipientNick] = useState<string | undefined>("");
  const author = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const [recipientId, setRecipientId] = useState<string>("");
  const roomName = `${recipientId}-${author._id}`;
  const sorted = roomName.split("-").sort().join("-");
  const room = sorted;
  const chatURL = `http://localhost:3030/api/chat/`;
  const socket: Socket = io("http://localhost:3030"); // Connessione socket al server

  const joinRoom = () => {
    if (recipientId && recipientId !== "") {
      socket.emit("joinRoom", room);
    }
  };
  const handleSendMessage = (content: string) => {
    const message: Message = {
      author: author,
      content,
      from: author._id,
      to: recipientId,
    };
    // Ricezione dei messaggi dal server
    socket.emit("sendMessage", message);
    console.log("from handle send message:", message);
    dispatch(addMessage(message));
  };

  const handleClicked = (_id: string, user_name?: string | undefined): void => {
    setRecipientId(_id);
    setRecipientNick(user_name);
    joinRoom();
  };

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

      // console.log("history:", history);s
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //commessione alla room"Room"  da rednere dinamico in base agli utenti
    socket.on("connect", () => {
      console.log("Connessione WebSocket stabilita con successo.");
    });

    joinRoom();
    socket.on("recieveMessage", (message: Message) => {
      console.log("user connect", author);
      console.log("from socket:", message);
      console.log(message);

      // console.log(message);
    });

    socket.on("errorMessage", (error) => {
      console.error("Errore nella connessione WebSocket:", error);
    });

    return () => {
      console.log("soket connection closed");

      socket.disconnect(); // Chiudi la connessione WebSocket quando il componente è smontato
    };
  }, []); // Connessione aperta quando il componente viene montato
  useEffect(() => {
    if (recipientId && recipientId !== "") {
      fetchMessages();
    }
  }, [recipientId]);

  return (
    <>
      <div className="flex h-full w-full bg-blacky-300">
        <div>
          <Sidebar handleClicked={handleClicked} />
        </div>
        <div className="w-3/4">
          <Header
            handleSendMessage={handleSendMessage}
            messages={messages}
            recepientNick={recepientNick}
          />
        </div>
      </div>
    </>
  );
};
