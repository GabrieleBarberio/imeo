import { Link } from "react-router-dom";

/**
 * @text [displayed text]
 *@link [url]
 *
 */

interface CallBtnProps {
  link: string;
  text: string;
}

export const CallBtn = (props: CallBtnProps) => {
  return (
    <>
      <Link to={props.link}>
        <button className="p-4 bg-[#69BAA5FA] font-medium text-lg rounded-xl">
          {props.text}
        </button>
      </Link>
    </>
  );
};
