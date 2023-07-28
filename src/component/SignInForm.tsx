import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export const SignInForm = () => {
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
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl font-bold">Prendi il volo!</h1>
          <p className="text-white text-md font-handwrite">Unisciti ad IMEO</p>
        </div>
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
            <input
              type="text"
              placeholder="expamle@gmail.com"
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

          <button className="site-xl-btn"> Sign In! </button>
        </form>
        <span className="text-white text-xs">
          Hai già un account?
          <Link className=" font-semibold hover:underline " to="/login">
            Accedi
          </Link>
        </span>
      </div>
    </>
  );
};
