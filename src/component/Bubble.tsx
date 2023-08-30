import clsx from "clsx";
import { useSelector } from "react-redux";

interface BubbleProps {
  author: object;
  text: string;
}

export const Bubble = (props: BubbleProps) => {
  const author: object = useSelector((s) => s.auth);
  const currentUser: boolean = props.author === author._id;

  return (
    <div
      className={clsx(
        " w-[100px] flex over flex-col items-start rounded-2xl bg-primary-300 text-white p-4",
        currentUser && "  mr-auto ",
        !currentUser && " ml-auto "
      )}
    >
      <span className=" text-secondary-100 ">{props.author}</span>
      <span>{props.text}</span>
    </div>
  );
};
