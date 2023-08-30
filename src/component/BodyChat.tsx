import React from "react";
import { Bubble } from "./Bubble";
import { useSelector } from "react-redux";

interface Message {
  author: string;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

export const BodyChat: React.FC<MessageListProps> = ({ messages }) => {
  const me: string = useSelector((state) => state.auth._id);

  return (
    <div className="flex flex-col gap-2 grow-1">
      {messages.map((message, index) => (
        <Bubble
          key={index}
          author={message.author.user_name}
          message={message.text}
          isCurrentUser={message.author === me}
        />
      ))}
    </div>
  );
};
