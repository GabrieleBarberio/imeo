export const Login = () => {
  // const handleLogin = () => {};
  return (
    <>
      <div
        className=" flex flex-col w-80
     mx-auto items-center border-2 p-3 "
      >
        <h1>Login</h1>
        <form
          className=" flex flex-col items-center w-80 gap-3 "
          // onSubmit={handleLogin}
        >
          <label htmlFor="username"> Username: </label>
          <input type="text" name="username" />
          <label htmlFor="password"> Password: </label>
          <input type="password" name="password" />
          <label htmlFor="remeber"> Remeber me: </label>

          <input type="checkbox" name="remember" />
        </form>
      </div>
    </>
  );
};
