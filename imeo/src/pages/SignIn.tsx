import { SignInForm } from "../component/SignInForm";
import logo from "../assets/logoimeo.png";

export const SignIn = () => {
  // const handleLogin = () => {};
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-primary-white">
        <img src={logo} alt="imeo-logo" className="max-w-[250px]" />
        <SignInForm />
      </div>
    </>
  );
};
