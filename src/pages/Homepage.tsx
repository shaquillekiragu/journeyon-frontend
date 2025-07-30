import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "tailwindcss";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import ImageQuoteBanner from "../components/ImageQuoteBanner.tsx";

export default function Homepage(): React.ReactElement {
  const name: string = "Ibrahim";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header size="large" />
      <Navbar />

      <ImageQuoteBanner
        imageSrc="/hackathon-image.png"
        quote="Confidence doesn't come from knowing everything - it comes from knowing you can learn anything"
      />

      <SubHeader text=" =) Read your motivational Quote of the Day!" />

      <main className="container mx-auto px-6 py-8">
        <section className="xs:w-full md:w-150 lg:w-200 mx-auto bg-orange-200 p-2 md:rounded-lg text-center">
          <h2>Hello {name}, welcome back!</h2>
        </section>
        <br />
        <section className="columns-2 text-center">
          <Link to={"/diary"}>
            <p className="hover:underline text-blue-600">Diary</p>
          </Link>
          <Link to={"/progress"}>
            <p className="hover:underline text-blue-600">Progress</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
