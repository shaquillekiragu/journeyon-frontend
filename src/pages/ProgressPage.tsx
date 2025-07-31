import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import HorizontalTimeline from "../components/HorizontalTimeline";

export default function ProgressPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <SubHeader text="Take a look at your apprenticeship progress below" />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Progress Timeline</h1>
        <HorizontalTimeline totalItems={10} />
      </main>
    </div>
  );
}
