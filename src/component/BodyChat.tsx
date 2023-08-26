import React from "react";
import { Bubble } from "./Bubble";

interface Message {
  author: string;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

export const BodyChat: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className=" flex  flex-col gap-2 grow-1">
      {messages &&
        messages.map((message, i) => (
          <Bubble key={i} author={message.author._id} message={message.text} />
        ))}
    </div>
  );
};
