import React from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryBtnProps {
  content: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export const PrimaryBtn = (props: PrimaryBtnProps) => {
  return (
    <>
      <button
        className={twMerge(
          " max-h-[40px] px-5 py-2 rounded-[2rem] break-normal text-white font-bold hover:bg-white hover:text-primary-400 outline-2 outline-primary-400 hover:outline-2 bg-primary-400"
        )}
        onClick={props.handleClick}
      >
        {props.content}
      </button>
    </>
  );
};
