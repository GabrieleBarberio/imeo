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
          " max-w-[250px] px-5 py-2 rounded-md max-h-[75px] text-white font-bold bg-secondary-100"
        )}
        onClick={props.handleClick}
      >
        {props.content}
      </button>
    </>
  );
};
