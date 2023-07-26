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
          " max-h-[40px] px-5 py-2 whitespace-nowrap rounded-[2rem] break-normal text-white font-bold hover:bg-primary-200 hover:border-primary-500 hover:border-1 bg-primary-400"
        )}
        onClick={props.handleClick}
      >
        {props.content}
      </button>
    </>
  );
};
