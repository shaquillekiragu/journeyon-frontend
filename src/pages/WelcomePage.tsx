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
        <section className="mx-auto columns-2">
          <p>Login</p>
          <p>Sign Up</p>
          {/*For some reason, buttons mess up the styling*/}
        </section>
      </main>
    </div>
  );
}
