import React, { useState } from "react";

interface SendFormProps {
  onSubmit: (message: string) => void;
}

export const SendForm: React.FC<SendFormProps> = ({ onSubmit }) => {
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    onSubmit(inputMessage);
    setInputMessage("");
  };

  return (
    <>
      <div className="w-[100%]">
        <form onSubmit={sendMessage}>
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            autoComplete="off"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};
