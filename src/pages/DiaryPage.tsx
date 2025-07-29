import React from "react";
import Navbar from "../components/Navbar";

export default function DiaryPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Diary page</h1>
      </main>
    </div>
  );
}
