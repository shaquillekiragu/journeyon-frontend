import { useContext, useEffect } from "react";
import { useState } from "react";
//import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { DiaryEntry } from "../components/DiaryEntry";
import CreateDiaryEntryForm from "../components/CreateDiaryEntryForm";
import SubHeader from "../components/SubHeader";
import { DataContext } from "../contexts/DataContextObject";
import { getDairyEntries } from "../services/dairyService";

export default function DiaryPage() {
  const { dairyEntries, user, setDairyEntries } = useContext(DataContext);

  useEffect(() => {
    getDairyEntries(user!.id).then((e) => setDairyEntries(e));
  }, []);

  const [creatingNewEntry, setCreatingNewEntry] = useState<boolean>(false);

  function addNewEntry(): void {
    setCreatingNewEntry(true);
  }

  function cancelNewEntry(): void {
    setCreatingNewEntry(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <Navbar />
      <main className="container mx-auto px-6 flex flex-col justify-center items-center gap-10">
        <SubHeader
          text="Let's record your thoughts and experiences!"
          name={user!.firstName}
        />
        <h1 className="text-3xl font-bold text-gray-800">Diary page</h1>
        {creatingNewEntry ? (
          <CreateDiaryEntryForm cancelNewEntry={cancelNewEntry} />
        ) : (
          <></>
        )}
        <ul className="">
          {dairyEntries?.map((entry) => (
            <li key={entry.id} className="">
              <DiaryEntry model={entry} />
            </li>
          ))}
        </ul>
      </main>

      {/* Floating Add Button */}
      <button
        type="button"
        onClick={addNewEntry}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-green-300 hover:bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 cursor-pointer"
        title="Add New Entry"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2v20M2 12h20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
