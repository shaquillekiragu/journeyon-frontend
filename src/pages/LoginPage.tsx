import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Logging in with...", email, password);
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLogin}>
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
            className="border rounded-md px-2 py-1"
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
            className="border rounded-md px-2 py-1"
            required
          />
        </div>
        <button
          type="submit"
          className="border rounded-md mt-5 p-1 hover:cursor-pointer"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
