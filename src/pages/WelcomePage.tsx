import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function WelcomePage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <main className="overflow-hidden text-center w-full mb-10 flex flex-col">
        <section className="px-6 py-8 h-100 mb-3 text-left text-neutral-50 bg-[#5c7fa3]/70">
          <div className="text-3xl m-auto relative top-50">
            <h1>
              Progress with <strong>support.</strong>
            </h1>
            <h1>
              Growing with <strong>confidence.</strong>
            </h1>
          </div>
        </section>
        <div className="w-full border-3 border-sky-700/50 mb-10"></div>
        <section className="w-full h-12 flex justify-center items-center">
          <div className="w-1/2 h-full flex justify-center">
            <Link
              to={"/login"}
              className="w-1/3 h-full flex justify-center items-center underline rounded-lg bg-theme-blue text-sm md:text-base text-white hover:text-gray-200 hover:cursor-pointer"
            >
              Log In
            </Link>
          </div>
          <div className="w-1/2 h-full flex justify-center">
            <Link
              to={"/signup"}
              className="w-1/3 h-full flex justify-center items-center underline rounded-lg bg-theme-blue text-sm md:text-base text-white hover:text-gray-200 hover:cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </section>
        <div className="ml-[25%] w-1/2 border border-sky-700/50 my-10"></div>
        <section className="ml-[12.5%] w-3/4 py-20 bg-stone-300 rounded-2xl">
          <p>[testimonials from students/companies that have used JourneyOn]</p>
        </section>
      </main>
    </div>
  );
}
