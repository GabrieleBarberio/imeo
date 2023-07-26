import { PrimaryBtn } from "../component/shared/PrimaryBtn";
import { SiteBtn } from "../component/shared/siteBtn";

export const DesignSystem = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };
  return (
    <>
      <PrimaryBtn content="Live Editor" handleClick={handleClick} />
      <SiteBtn content="Registrati" handleClick={handleClick} />
    </>
  );
};
