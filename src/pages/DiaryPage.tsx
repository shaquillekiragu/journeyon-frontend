import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";

export default function DiaryPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <SubHeader text="Let's record your thoughts and experiences!" />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Diary page</h1>
      </main>
    </div>
  );
}
