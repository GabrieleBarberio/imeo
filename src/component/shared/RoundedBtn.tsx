import { twMerge } from "tailwind-merge";

interface PrimaryBtnProps {
  content: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export const RoundedBtn = (props: PrimaryBtnProps) => {
  return (
    <>
      <button
        className={twMerge(
          " max-w-[250px] px-2 py-2 rounded-[50%] max-h-[75px] text-white font-bold bg-primary-400  hover:bg-primary-200 hover:border-primary-500 hover:border-1"
        )}
        onClick={props.handleClick}
      >
        {props.content}
      </button>
    </>
  );
};
