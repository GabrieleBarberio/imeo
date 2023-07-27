import React from "react";
import { twMerge } from "tailwind-merge";
/**
 * Reusable button component with Tailwind CSS styles.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode | string} props.content - The content to display inside the button (icon or text).
 * @param {function} [props.handleClick] - The click event handler function for the button.
 * @param {string} [props.className] - Additional class name(s) to override default styles using Tailwind CSS utility classes.
 * @returns {JSX.Element} The `SiteBtn` component.
 */

interface SiteBtnProps {
  content: React.ReactNode | string;
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  className?: string;
}

export const SiteBtn = ({ content, handleClick, className }: SiteBtnProps) => {
  return (
    <>
      <button
        className={twMerge(
          " max-h-[40px]  px-5 py-2 rounded-md  text-white font-bold bg-secondary-100 hover:bg-green-400",
          className
        )}
        onClick={handleClick}
      >
        {content}
      </button>
    </>
  );
};
