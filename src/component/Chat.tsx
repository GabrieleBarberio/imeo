// import React, { useEffect, useState } from "react";
// import { io, Socket } from "socket.io-client"; // Assicurati che io e Socket siano importati dal modulo corretto
// import { Body } from "./BodyChat";
// import { SendForm } from "./SendForm";
// import { useSelector } from "react-redux";

// interface Message {
//   author: string;
//   text: string;
// }

// export const Chat: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const author = useSelector((s) => s.auth.user_name); // Dovrà essere dinamico in base a chi ha fatto il login (?) Utilizziamo Redux
//   const token = useSelector((s) => s.auth.token);

//   //in delle utility
//   const fetchUserById = async (userId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3030/api/users/${userId}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch user");
//       }

//       const user = await response.json();
//       return user;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };
//   const recipientId = "64c7f225454147828a86a31d"; // ID dell'utente destinatario
//   fetchUserById(recipientId)
//     .then((user) => {
//       console.log("User:", user);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   const socket: Socket = io("http://localhost:3030"); // Connessione socket al server

//   useEffect(() => {
//     socket.emit("joinRoom", "room"); //commessione alla room"Room"  da rednere dinamico in base agli utenti

//     socket.on("chatMessage", (message: Message) => {
//       console.log("user connect", author);

//       // Ricezione dei messaggi dal server
//       setMessages((prevMessages) => [...prevMessages, message]);
//       console.log(message);
//     });

//     return () => {
//       socket.disconnect(); // Chiudi la connessione WebSocket quando il componente è smontato
//     };
//   }, []); // Connessione aperta quando il componente viene montato

//   const handleSendMessage = (text: string) => {
//     const message: Message = { author, text };
//     socket.emit("chatMessage", message);
//   };

//   return (
//     <div>
//       <h1>Chat</h1>
//       <Body messages={messages} />
//       <SendForm onSubmit={handleSendMessage} />
//     </div>
//   );
// };
