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
        <button
          className="flex justify-center items-center w-48 h-12 rounded-lg"
          type="button"
        >
          <strong>SPACE</strong>
          <div className="absolute w-full h-full overflow-hidden rounded-lg">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </Link>
    </>
  );
};
