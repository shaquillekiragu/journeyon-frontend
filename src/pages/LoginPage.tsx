import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsers } from "../api";

interface IAccount {
  id: number;
  email: string;
  password: string;
}

export default function LoginPage(): React.ReactElement {
  const navigate = useNavigate();
  const response = getUsers();
  const users = response.data.users;
  console.log(users, " < users");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();

    const isCorrectEmail = users.some((user) => {
      return user.user.email === email;
    });

    const isCorrectPassword = users.some((user) => {
      return user.user.password === password;
    });

    if (isCorrectEmail && isCorrectPassword) {
      navigate("/home");
    }
    setShowError(true);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-5 mt-[20vh]">
      <h1 className="text-4xl text-center font-semibold mb-5">Login page</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <div className="flex gap-5">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md"
            required
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder=" Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md"
            required
          />
        </div>

        <p
          className={`text-red-600 text-center mb-4 ${
            showError ? "visible" : "hidden"
          }`}
        >
          An account with this email doesn't exist.
        </p>

        <button
          type="submit"
          className="border rounded-md mt-4 p-1 hover:cursor-pointer"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="hover:underline">
          Sign Up
        </Link>
      </p>
    </main>
  );
}
