import { useState } from "react";
import * as config from "../Config";
import Admin from "./Admin";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    user: "",
    password: "",
  });

  const [isAuth, setIsAuth] = useState(false);

  const { user, password } = loginDetails;

  const handleOnChange = (e) => {
    setLoginDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !password) {
      alert("You need to enter a Username and a Password");
      return;
    }
    fetch(`${config.API_BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ password, user, isAdmin: true }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setIsAuth(result.isAuth);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return isAuth ? (
    <Admin />
  ) : (
    <section className="flex flex-col justify-center items-center mt-6">
      <h3 className="font-bold text-lg mb-4">Login as Admin</h3>
      <form
        className="flex flex-col md:felx-row justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="Username"></label>
        <input
          className="rounded p-2 mb-3 bg-slate-200"
          onChange={handleOnChange}
          type="text"
          id="user"
          placeholder="Username"
          name="user"
          value={user}
        />
        <input
          className="rounded p-2 mb-4 bg-slate-200"
          onChange={handleOnChange}
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
        />
        <button
          className=" text-center w-16 bg-slate-700 text-white p-2 hover:bg-slate-600 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
