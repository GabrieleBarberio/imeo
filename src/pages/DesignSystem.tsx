import { PrimaryBtn } from "../component/shared/PrimaryBtn";
import { RoundedBtn } from "../component/shared/RoundedBtn";

export const DesignSystem = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };
  return (
    <>
      <div className="flex">
        <PrimaryBtn content="Live Editor" handleClick={handleClick} />
        <RoundedBtn content="vid" handleClick={handleClick} />
      </div>
    </>
  );
};
