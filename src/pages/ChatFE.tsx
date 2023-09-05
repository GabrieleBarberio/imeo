import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/HeaderChat";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { Message, addMessage, setMessages } from "../store/messageSlice";
import { RootState } from "../store";
import fetchData from "../utility/fetchData";
import axios from "axios";

export const ChatFE = () => {
  const messages = useSelector((s: RootState) => s.chat.messages);
  const [recepientNick, setRecipientNick] = useState<string | undefined>("");
  const [recipientId, setRecipientId] = useState<string>("");
  const [recipientRoom, setRecipientRoom] = useState("");
  const [history, setHistory] = useState<Message[]>([]);
  const author = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const userRoom = author._id;

  const chatURL = `http://localhost:3030/api/chat/`;
  const socket = io(`http://localhost:3040`, {
    auth: (cb) => {
      cb({ token: author.token });
    },
  }); // Connessione socket al server + invio token

  const { data } = fetchData(chatURL, {
    method: "GET",
    headers: {
      authorization: `Bearer ${author.token}`,
    },
  });

  const getHistory = () => {
    const history = messages.filter((message) => {
      console.log(message, recipientId, author._id);

      return (
        message.from === author._id ||
        message.from === recipientId ||
        message.to === recipientId ||
        message.to === author._id
      );
    });
    setHistory(history);
  };

  const joinRoom = () => {
    socket.emit("joinRoom", userRoom);
  };

  const handleSendMessage = async (content: string) => {
    const message: Message = {
      content,
      from: author._id,
      to: recipientId,
    };
    console.log(message);

    try {
      const res = await axios({
        url: chatURL + "message",
        method: "POST",
        data: {
          room: recipientRoom,
          message,
        },
        headers: {
          authorization: `Bearer ${author.token}`,
        },
      });
      console.log("from handle send message:", message);
      console.log("res:", res.status);
      dispatch(addMessage(message));
    } catch (err) {
      console.error("Errore durante la chiamata API:", err);
    }
  };

  const handleClicked = (_id: string, user_name?: string | undefined): void => {
    setRecipientId(_id);
    setRecipientRoom(_id);
    setRecipientNick(user_name);

    // getHistory();
    console.log("history:", history);
  };
  useEffect(() => {
    getHistory();
    console.log("history:", history);
  }, [messages]);

  useEffect(() => {
    console.log(data);
    dispatch(setMessages(data));
  }, [data]);

  useEffect(() => {
    getHistory();

    socket.on("connect", () => {
      console.log("Connessione WebSocket stabilita con successo.");
    });
    joinRoom();

    socket.on("sendMessage", (message) => {
      console.log("sendMessage:", message);

      dispatch(addMessage(message));
    });

    socket.on("errorMessage", (error) => {
      console.error("Errore nella connessione WebSocket:", error);
    });

    return () => {
      console.log("Connessione WebSocket disattivata.");

      socket.disconnect(); // Chiud la connessione WebSocket quando il componente è smontato
    };
  }, []); // Connessione aperta quando il componente viene montato

  return (
    <>
      <div className="flex h-full w-full bg-blacky-300">
        <div>
          <Sidebar handleClicked={handleClicked} />
        </div>
        <div className="w-3/4">
          <Header
            handleSendMessage={handleSendMessage}
            messages={history}
            recepientNick={recepientNick}
          />
        </div>
      </div>
    </>
  );
};
