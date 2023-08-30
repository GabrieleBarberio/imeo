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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
      }}
    >
      {Array.isArray(messages) &&
        messages.map((message, i) => (
          <Bubble key={i} author={message.from} message={message.content} />
        ))}
    </div>
  );
};
