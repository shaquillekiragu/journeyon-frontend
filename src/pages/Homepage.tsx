import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "tailwindcss";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";

export default function Homepage(): React.ReactElement {
  const name: string = "Ibrahim";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <SubHeader text=" =) Read your motivational Quote of the Day!" />
      <main className="container mx-auto text-center">
        <section className="px-6 py-8 h-100 mb-3" id="theHero">
          <h1 className="text-3xl font-bold text-gray-800 m-auto">
            <q>Generic Motivational Quote</q>
          </h1>
        </section>
        <section className="xs:w-full md:w-150 lg:w-200 mx-auto bg-orange-200 p-2 md:rounded-lg">
          <h2>Hello {name}, welcome back!</h2>
        </section>
        <br />
        <section className="columns-2">
          <Link to={"/diary"}>
            <p>Diary</p>
          </Link>
          <Link to={"/progress"}>
            <p>Progress</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
