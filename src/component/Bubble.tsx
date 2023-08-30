import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface BubbleProps {
  message: string;
  author: string;
}

export const Bubble = (props: BubbleProps) => {
  const author = useSelector((s: RootState) => s.auth.user_name);
  const currentUser: boolean = props.author === author;
  console.log(props);

  return (
    <div
      className={clsx(
        "w-[30%] p-3 flex flex-col gap-1 overflow-auto rounded-2xl bg-primary-300 text-white ]",
        currentUser && "  mr-auto ",
        !currentUser && " ml-auto "
      )}
    >
      <span className=" text-secondary-100 flex"> {props.author}</span>
      <span className=" p-1 break-all "> {props.message}</span>
    </div>
  );
};
