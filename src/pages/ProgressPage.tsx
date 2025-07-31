import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import HorizontalTimeline from "../components/HorizontalTimeline";
import { useProgress } from "../hooks/useProgress";
import { getMotivationalMessage } from "../utils/motivationalMessages";

export default function ProgressPage(): React.ReactElement {
  const totalItems = 10;
  const { completedItems } = useProgress();
  const completedCount = completedItems.size;
  const motivationalMessage = getMotivationalMessage(completedCount, totalItems);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <SubHeader 
        text={motivationalMessage}
        showProgress={true}
        totalItems={totalItems}
      />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Progress Timeline</h1>
        <HorizontalTimeline totalItems={totalItems} />
      </main>
    </div>
  );
}
