import React, { useContext, useEffect, useState } from "react";
//import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "tailwindcss";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import ImageQuoteBanner from "../components/ImageQuoteBanner.tsx";
import DiaryHome from "../components/DiaryHome";
import ProgressHome from "../components/ProgressHome";
import { DataContext } from "../contexts/DataContextObject.ts";
import { getMilestones } from "../services/progressService";
import { getDairyEntries } from "../services/dairyService";
import type { MilestoneProgress } from "../Interfaces/MilestoneModel";
import type { DairyModel } from "../Interfaces/DairyModel";

export default function Homepage(): React.ReactElement {
  const { user } = useContext(DataContext);
  const [milestones, setMilestones] = useState<MilestoneProgress[]>([]);
  const [diaryEntries, setDiaryEntries] = useState<DairyModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.id) {
        try {
          // Fetch milestones and diary entries in parallel
          const [milestonesData, diaryData] = await Promise.all([
            getMilestones(user.id),
            getDairyEntries(user.id)
          ]);
          setMilestones(milestonesData);
          setDiaryEntries(diaryData);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    };

    fetchData();
  }, [user?.id]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header size="large" /> */}
      <Navbar />

      <ImageQuoteBanner
        imageSrc="/hackathon-image.png"
      />

      <SubHeader name={user!.firstName} text=" =) Read your motivational Quote of the Day!" />
      <main className="container mx-auto text-center">
        <section className="grid grid-cols-1 md:grid-cols-2 mx-2 gap-9">
          <Link to={"/diary"}>
            <DiaryHome diaryEntries={diaryEntries} />
          </Link>
          <Link to={"/progress"}>
            <ProgressHome milestones={milestones} />
          </Link>
        </section>
        <br />
        <br />
      </main>
    </div>
  );
}
