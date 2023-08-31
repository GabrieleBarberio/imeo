import { ReactEventHandler, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
interface FormValues {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
}

export const SignInForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();

  const signUser = async (formValues: FormValues) => {
    try {
      const response = await fetch("http://localhost:3030/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast("Registrazione andata a buon fine!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: unknown) {
      console.error("Error sending the form data:", (error as Error).message);

      toast.error(`Errore: ${(error as Error).message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleSubmit: ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const formValues: FormValues = Object.fromEntries(formData);

    signUser(formValues);
  };

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
          ref={formRef}
          className=" flex flex-col items-center justify-between w-80 gap-5 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter first name"
              className="input-form"
              name="first_name"
            />
            <input
              type="text"
              placeholder="Enter last name"
              className="input-form"
              name="last_name"
            />
            <input
              type="text"
              placeholder="Enter a username"
              className="input-form"
              name="user_name"
            />
            <input
              type="email"
              placeholder="expamle@gmail.com"
              className="input-form"
              name="email"
            />
            <input
              type="password"
              placeholder="Insert Password"
              className="input-form"
              name="password"
            />
          </div>

          <button type="submit" className="site-xl-btn">
            Sign In!
          </button>
        </form>
        <span className="text-white text-xs">
          Hai già un account?
          <Link className=" font-semibold hover:underline " to="/login">
            Accedi
          </Link>
        </span>
      </div>
      <ToastContainer />
    </>
  );
};
