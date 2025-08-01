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

      <ImageQuoteBanner imageSrc="/hackathon-image.png" quote="" />

      <main className="container mx-auto text-center px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 max-w-4xl mx-auto">
          <Link to="/diary" className="w-full sm:w-auto">
            <button className="bg-[#5c7fa3] text-white text-xl sm:text-2xl lg:text-3xl px-8 sm:px-16 lg:px-24 py-6 sm:py-8 lg:py-12 rounded hover:bg-sky-700 w-full sm:w-auto min-w-[200px] font-sans font-medium transition-colors duration-200">
              View my diary
            </button>
          </Link>
          <Link to="/progress" className="w-full sm:w-auto">
            <button className="bg-[#5c7fa3] text-white text-xl sm:text-2xl lg:text-3xl px-8 sm:px-16 lg:px-24 py-6 sm:py-8 lg:py-12 rounded hover:bg-sky-700 w-full sm:w-auto min-w-[200px] font-sans font-medium transition-colors duration-200">
              View my progress
            </button>
          </Link>
        </div>
        <br />
        <br />
      </main>
    </div>
  );
}
