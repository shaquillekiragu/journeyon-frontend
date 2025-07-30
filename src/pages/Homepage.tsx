import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";

export default function Homepage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <SubHeader text=" =) Read your motivational Quote of the Day!" />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Home page</h1>
      </main>
    </div>
  );
}
