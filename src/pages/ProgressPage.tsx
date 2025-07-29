import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function ProgressPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Progress page</h1>
      </main>
    </div>
  );
}
