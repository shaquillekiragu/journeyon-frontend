import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsers } from "../api";
import { useAuth } from "../contexts/UserContext";
import Header from "../components/Header";
import type { IAccount } from "../interfaces";

export default function LoginPage(): React.ReactElement {
  const navigate = useNavigate();
  const { setLoggedInUser, setIsLoggedIn } = useAuth();

  const response = getUsers();
  const users = response?.data?.users || [];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    setShowEmailError(false);
    setShowPasswordError(false);
    const attemptedUser = users.find(
      (user: { user: IAccount }) => user.user.email === email
    );

    if (!attemptedUser) {
      setShowEmailError(true);
      return;
    }

    if (attemptedUser.user.password !== password) {
      setShowPasswordError(true);
      return;
    }

    setLoggedInUser(attemptedUser);
    console.log(attemptedUser, " < user");
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fefbf1" }}>
      <Header size="large" />

      <main className="flex flex-col justify-center items-center gap-5 mt-[10vh]">
        <div
          className="p-2 rounded-lg"
          style={{
            border: "2px solid #5c7fa3",
          }}
        >
          <div
            className="p-15 rounded-lg shadow-lg"
            style={{
              backgroundColor: "#5c7fa3",
            }}
          >
            <h1 className="text-4xl text-center font-semibold mb-8 text-white text-decoration-line: underline">
              Log In
            </h1>

            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div className="flex gap-5">
                <label
                  htmlFor="email"
                  className="font-normal
                 text-white"
                >
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border bg-white rounded-md px-2 py-1"
                  required
                />
              </div>

              <div className="flex gap-5">
                <label htmlFor="password" className="font-normal text-white">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=" Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border bg-white rounded-md px-2 py-1"
                  required
                />
              </div>

              {showEmailError && (
                <p className="text-red-300 text-center mb-4">
                  An account with this email doesn't exist.
                </p>
              )}
              {showPasswordError && (
                <p className="text-red-300 text-center mb-4">
                  Your password for this account is incorrect.
                </p>
              )}

              <button
                type="submit"
                className="bg-white text-gray-800 font-semibold border rounded-md mt-4 p-2 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200 text-decoration-line: underline"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="hover:underline">
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
}
