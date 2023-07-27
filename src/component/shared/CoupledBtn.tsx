/**
 * Reusable button component with Tailwind CSS styles.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode | string} props.content - The content to display inside the button (icon or text).
 * @param {function} [props.handleClick] - The click event handler function for the button.
 * @param {string} [props.styleLeft] - Additional class name(s) to override default styles  button using Tailwind CSS utility classes.
 * @param {string} [props.styleRight] - Additional class name(s) to override default styles of the right using Tailwind CSS utility classes.
 * @returns {JSX.Element} The `SiteBtn` component.
 */
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
