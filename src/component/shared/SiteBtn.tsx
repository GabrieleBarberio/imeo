import { twMerge } from "tailwind-merge";

interface SiteBtnProps {
  content: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export const SiteBtn = (props: SiteBtnProps) => {
  return (
    <>
      <button
        className={twMerge(
          " max-h-[40px]  px-5 py-2 rounded-md  text-white font-bold bg-secondary-100"
        )}
        onClick={props.handleClick}
      >
        {props.content}
      </button>
    </>
  );
};
