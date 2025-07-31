import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "tailwindcss";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import ImageQuoteBanner from "../components/ImageQuoteBanner.tsx";
import DiaryHome from "../components/DiaryHome";
import ProgressHome from "../components/ProgressHome";

export default function Homepage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header size="large" />
      <Navbar />

      <ImageQuoteBanner
        imageSrc="/hackathon-image.png"
        quote="Confidence doesn't come from knowing everything - it comes from knowing you can learn anything"
      />

      <SubHeader text=" =) Read your motivational Quote of the Day!" />
      <main className="container mx-auto text-center">
        <section className="grid grid-cols-1 md:grid-cols-2 mx-2 gap-4">
          <Link to={"/diary"}>
            <DiaryHome />
          </Link>
          <Link to={"/progress"}>
            <ProgressHome />
          </Link>
        </section>
        <br />
        <br />
      </main>
    </div>
  );
}
