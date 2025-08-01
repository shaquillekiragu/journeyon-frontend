import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
//import HorizontalTimeline from "../components/HorizontalTimeline";
import HorizontalTimeline from "../components/HorizontalTimeline copy";
import { DataContext } from "../contexts/DataContextObject";
import { getMilestones } from "../services/progressService";
import type { MilestoneProgress } from "../Interfaces/MilestoneModel";

export default function ProgressPage(): React.ReactElement {
  const { user } = useContext(DataContext);
  const [milestones, setMilestones] = useState<MilestoneProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMilestones = async () => {
      if (user?.id) {
        try {
          const milestonesData = await getMilestones(user.id);
          setMilestones(milestonesData);
        } catch (error) {
          console.error("Failed to fetch milestones:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMilestones();
  }, [user?.id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <SubHeader name={user!.firstName} text="Take a look at your apprenticeship progress below" />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Progress Timeline</h1>
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading milestones...</p>
          </div>
        ) : (
          <HorizontalTimeline milestones={milestones} userId={user?.id} />
        )}
      </main>
    </div>
  );
}
