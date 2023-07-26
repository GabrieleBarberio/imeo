import { twMerge } from "tailwind-merge";

interface PrimaryBtnProps {
  content: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export const PrimaryBtn = (props: PrimaryBtnProps) => {
  return (
    <>
      <button
        className={twMerge(
          " max-w-[250px] px-5 py-2 rounded-[2rem] max-h-[75px] text-white font-bold bg-primary-400"
        )}
        onClick={props.handleClick}
      >
        {props.content}
      </button>
    </>
  );
};
