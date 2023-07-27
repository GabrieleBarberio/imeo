import React from "react";
import { twMerge } from "tailwind-merge";

interface CoupledBtnProps {
  contentLeft: React.ReactNode | string;
  contentRight: React.ReactNode | string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styleLeft?: string;
  styleRight?: string;
}

export const CoupledBtn = (props: CoupledBtnProps) => {
  return (
    <div className="  inline-flex">
      <button
        className={twMerge(
          " text-white bg-primary-400 hover:bg-primary-200 hover:text-primary-400 font-bold py-2 px-4 rounded-l",
          props.styleLeft
        )}
      >
        {props.contentLeft}
      </button>
      <div className=" h-5/6 w-[0.5px] bg-blacky-200"></div>
      <button
        className={twMerge(
          " text-white bg-primary-400 hover:bg-primary-200 hover:text-primary-400 font-bold py-2 px-4 rounded-r",
          props.styleRight
        )}
      >
        {props.contentRight}
      </button>
    </div>
  );
};
