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
        "w-[30%] p-3 flex flex-col gap-1 overflow-auto rounded-2xl bg-primary-300 text-white ]",
        currentUser && "  mr-auto ",
        !currentUser && " ml-auto "
      )}
    >
      <span className=" text-secondary-100 flex"> {props.author} Gabriele Barberio </span>
      <span className=" p-1 break-all "> {props.message} afaefafeeffeefaefeaiejhifjei fsgrgsgggrsgsrggsgsgsgsrggsgrsdgsgsgrgsgsgsrrsrgsrgsgsrgsgsgsgrsggsgsrsgeife </span>
    </div>
  );
};
