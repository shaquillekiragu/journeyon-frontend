import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function WelcomePage(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center gap-50 mt-[30vh]">
        <Link to="/login">
          <div className="border-2 px-40 py-20 rounded-3xl text-2xl hover:cursor-pointer">
            Login
          </div>
        </Link>
        <Link to="/signup">
          <div className="border-2 px-40 py-20 rounded-3xl text-2xl hover:cursor-pointer">
            Sign up
          </div>
        </Link>
      </main>
    </>
  );
}
