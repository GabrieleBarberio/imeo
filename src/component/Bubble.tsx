import clsx from "clsx";
import { useSelector } from "react-redux";

interface BubbleProps {
  message: string;
  author: string;
}

export const Bubble = (props: BubbleProps) => {
  const author = useSelector((s) => s.auth.user_name);
  const currentUser: boolean = props.author === author;

  return (
    <div
      className={clsx(
        " w-[100px] flex flex-col items-start rounded-2xl bg-primary-300 text-white p-4",
        currentUser && "  mr-auto ",
        !currentUser && " ml-auto "
      )}
    >
      <span className=" text-secondary-100 ">{props.author}</span>
      <span>{props.message}</span>
    </div>
  );
};
