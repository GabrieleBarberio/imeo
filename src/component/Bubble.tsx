import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useRef } from "react";

interface BubbleProps {
  message: string;
  author: string;
}

export const Bubble = (props: BubbleProps) => {
  const author = useSelector((s: RootState) => s.auth.user_name);
  const currentUser: boolean = props.author === author;
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("from bubble", props.message);
    if (bubbleRef.current) {
      bubbleRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [props.message]);

  return (
    <div
      ref={bubbleRef}
      className={clsx(
        "w-[30%] p-3 flex flex-col gap-1 overflow-auto m-3 rounded-2xl bg-primary-300 text-white ]",
        currentUser && "  ml-auto ",
        !currentUser && " mr-auto "
      )}
    >
      <span className=" text-secondary-100 flex"> {props.author}</span>
      <span className=" p-1 break-all "> {props.message}</span>
    </div>
  );
};
