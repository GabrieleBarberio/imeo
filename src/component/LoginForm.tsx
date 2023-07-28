import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  // const handleLogin = () => {};
  // clsx(
  //               "input-form",
  //               error && "border-spacing-2 border-red-800"
  //             )

  // const error = false;
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
              className="input-form"
              name="username"
            />
            {/* clsx == tool */}

            <input
              type="password"
              placeholder="Insert Password"
              className="input-form"
              name="password"
            />
          </div>

          <Button content="Login!" className="site-btn" />
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
