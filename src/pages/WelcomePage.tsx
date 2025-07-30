import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function WelcomePage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <main className="container text-center w-full mx-auto">
        <section className="px-6 py-8 h-100 mb-3 text-left text-neutral-50 bg-sky-700">
          <div className="text-3xl m-auto relative top-50">
            <h1>
              Progress with <strong>support.</strong>
            </h1>
            <h1>
              Growing with <strong>confidence.</strong>
            </h1>
          </div>
        </section>
        <section className="mx-auto w-full h-10 flex justify-center items-center">
          <Link
            to={"/login"}
            className="w-1/2 h-full flex justify-center items-center hover:cursor-pointer hover:bg-blue-100"
          >
            Log In
          </Link>
          <Link
            to={"/signup"}
            className="w-1/2 h-full flex justify-center items-center hover:cursor-pointer hover:bg-blue-100"
          >
            Sign Up
          </Link>
        </section>
      </main>
    </div>
  );
}
