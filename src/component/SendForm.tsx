import React, { useState } from "react";

interface SendFormProps {
  onSubmit: (message: string) => void;
}

export const SendForm: React.FC<SendFormProps> = ({ onSubmit }) => {
  const [inputMessage, setInputMessage] = useState("");

  // const sendMessage = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (inputMessage.trim() === "") return;

  //   onSubmit(inputMessage);
  //   setInputMessage("");
  // };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;
    onSubmit(inputMessage);
    setInputMessage("");
    onSubmit(inputMessage);
    setInputMessage("")
  };

  return (
    <div className="flex justify-center w-4/4 relative mt-2">
      <form
        onSubmit={sendMessage}
        className="w-[90%] mt-1 flex items-center absolute "
      >
        <input
          className="w-[90%]  border-none p-4 rounded-lg bg-secondary-400 text-white"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          autoComplete="off"
          placeholder="Scrivi un messaggio..."
        />
        <button
          type="submit"
          className="border-none absolute left-[82%] rounded-lg p-1 bg-secondary-400"
        >
          <i>
            <svg
              width="50"
              height="30"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_189)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.4568 27.0073C53.4915 27.7108 53.0802 28.3601 52.4294 28.6294L20.0514 42.0251C19.4009 42.2942 18.6515 42.1256 18.1789 41.6039C17.7063 41.0821 17.6125 40.3197 17.9446 39.6989L23.9551 28.4617L16.8684 17.8702C16.4769 17.2851 16.4953 16.5172 16.9142 15.9515C17.3332 15.3858 18.0624 15.1443 18.7362 15.3481L52.2748 25.4941C52.949 25.698 53.4221 26.3038 53.4568 27.0073ZM22.2286 19.8871L27.2816 27.4392C27.6239 27.9508 27.6563 28.6093 27.366 29.1521L23.0804 37.1646L46.8428 27.3333L22.2286 19.8871Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_189">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(26.8574) rotate(42.1776)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </i>
        </button>
      </form>
    </div>
  );
};
