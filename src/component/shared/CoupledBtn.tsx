import React from "react";

interface CoupledBtnProps {
  contentLeft: React.ReactNode | string;
  contentRight: React.ReactNode | string;
  // handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styleLeft?: string;
  styleRight?: string;
}

export const CoupledBtn = (props: CoupledBtnProps) => {
  return (
    <div className="  inline-flex">
      <button className=" text-white bg-primary-400 hover:bg-primary-200 hover:text-primary-400 font-bold py-2 px-4 rounded-l">
        {props.contentLeft}
      </button>
      <div className=" h-5/6 w-[0.5px] bg-blacky-200"></div>
      <button className=" text-white bg-primary-400 hover:bg-primary-200 hover:text-primary-400 font-bold py-2 px-4 rounded-r">
        {props.contentRight}
      </button>
    </div>
  );
};
