import { SignInForm } from "../component/SignInForm";
import logo from "../assets/logoimeo.png";
import bg from "../assets/bg.png";

export const SignIn = () => {
  // const handleLogin = () => {};
  return (
    <>
      <div className="flex flex-col  h-screen justify-center items-center bg-cover bg-primary-200">
        <img src={logo} alt="imeo-logo" className="max-w-[250px]" />
        <SignInForm />
      </div>
    </>
  );
};
