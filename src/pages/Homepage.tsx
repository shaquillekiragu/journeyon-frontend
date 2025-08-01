import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "tailwindcss";
import { Link } from "react-router-dom";

import ImageQuoteBanner from "../components/ImageQuoteBanner.tsx";

export default function Homepage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header size="large" />
      <Navbar />

      <ImageQuoteBanner
        imageSrc="/hackathon-image.png"
        quote=""
      />

      <main className="container mx-auto text-center">
        <section className="grid grid-cols-1 md:grid-cols-2 mx-2 gap-4 mt-6">
          <Link to="/diary">
            <button className="bg-[#5c7fa3] text-white text-3xl px-40 py-20 rounded hover:bg-sky-700">
              View my diary
            </button>
          </Link>
          <Link to="/progress">
            <button className="bg-[#5c7fa3] text-white text-3xl px-40 py-20 rounded hover:bg-sky-700">
              View my progress
            </button>
          </Link>
        </section>
        <br />
        <br />
      </main>
    </div>
  );
}
