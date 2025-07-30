import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import ImageQuoteBanner from "../components/ImageQuoteBanner.tsx";

export default function Homepage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header size="large" />
      <Navbar />

      <ImageQuoteBanner
        imageSrc="/hackathon-image.png"
        quote="Confidence doesn't come from knowing everything - it comes from knowing you can learn anything"
      />

      <SubHeader text={""} />

      <main className="container mx-auto px-6 py-8"></main>
    </div>
  );
}
