import { PrimaryBtn } from "../component/shared/PrimaryBtn";

export const DesignSystem = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };
  return (
    <>
      <PrimaryBtn content="Live Editor" handleClick={handleClick} />
    </>
  );
};
