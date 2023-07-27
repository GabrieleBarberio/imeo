import { Link } from "react-router-dom";
import { SiteBtn } from "./shared/SiteBtn";

export const LoginForm = () => {
  // const handleLogin = () => {};
  return (
    <>
      <div
        className=" flex flex-col max-w-80
       mx-auto items-center border-2 justify-between p-5 gap-12 bg-primary-200 rounded-2xl "
      >
        <h1 className="text-white text-2xl">Login</h1>
        <form
          className=" flex flex-col items-center justify-between w-80 gap-5 "
          // onSubmit={handleLogin}
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Username"
              className="bg-primary-100 rounded-md focus:ring-offset-[0.5px] focus:ring-purple-400"
              name="username"
            />

            <input
              type="password"
              placeholder="Insert Password"
              className="bg-primary-100 rounded-md focus:ring-offset-[0.5px] focus:ring-purple-400"
              name="password"
            />
          </div>

          <SiteBtn content="Login!" className=" w-4/6 " />
        </form>
        <span className="text-white text-xs">
          Non hai ancora un account?
          <Link className=" font-semibold hover:underline " to="/signin">
            Registrati
          </Link>
        </span>
      </div>
    </>
  );
};
