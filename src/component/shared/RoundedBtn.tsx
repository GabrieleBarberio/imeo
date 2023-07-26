import { twMerge } from "tailwind-merge";

interface PrimaryBtnProps {
  content: React.ReactNode | string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export const RoundedBtn = (props: PrimaryBtnProps) => {
  return (
    <>
      <button
        className={twMerge(
          " max-h-[40px] px-3 py-2 rounded-[50%]  text-white font-bold bg-primary-400  hover:bg-primary-200 hover:border-primary-500 hover:border-1"
        )}
        onClick={props.handleClick}
      >
        {props.content}
      </button>
    </>
  );
};
