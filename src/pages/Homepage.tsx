import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "tailwindcss";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import DiaryHome from "../components/DiaryHome";
import ProgressHome from "../components/ProgressHome";

export default function Homepage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <SubHeader text=" =) Read your motivational Quote of the Day!" />
      <main className="container mx-auto text-center">
        <section className="px-6 py-8 h-100 mb-3 bg-sky-700" id="theHero">
          <h1 className="text-3xl font-bold text-neutral-50 m-auto">
            <q>Generic Motivational Quote</q>
          </h1>
        </section>
        <br />
        <section className="columns-2xl">
          <Link to={"/diary"}>
            <DiaryHome />
          </Link>
          <Link to={"/progress"}>
            <ProgressHome />
          </Link>
        </section>
      </main>
    </div>
  );
}
