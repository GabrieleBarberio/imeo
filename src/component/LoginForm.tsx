import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../store/authSlice";
import { ToastContainer, toast } from "react-toastify";

interface LoginFormState {
  user_name: string;
  password: string;
}
interface res {
  token: string;
  user_name: string;
}

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<LoginFormState>({
    user_name: "",
    password: "",
  });

  const navigate = useNavigate();

  const send = async (): Promise<void> => {
    try {
      const res = await fetch("http://localhost:3030/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const result: res = await res.json();
        dispatch(login(result));

        console.log(result);

        toast("Accesso Eseguito!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          console.log("ciao");

          navigate("/chat");
        }, 1000);
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setForm((_form) => ({
      ..._form,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send();
  };

  return (
    <div className="flex flex-col max-w-80 mx-auto items-center border-2 justify-between p-5 gap-12 bg-primary-200 rounded-2xl">
      <h1 className="text-white text-2xl">Login</h1>
      <form
        className="flex flex-col items-center justify-between w-80 gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Username"
            className="input-form"
            name="user_name"
            onChange={handleInput}
          />

          <input
            type="password"
            placeholder="Insert Password"
            className="input-form"
            name="password"
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="site-xl-btn">
          Login!
        </button>
      </form>
      <span className="text-white text-xs">
        Non hai ancora un account?
        <Link className="font-semibold hover:underline" to="/signin">
          Registrati
        </Link>
      </span>
      <ToastContainer />
    </div>
  );
};
