import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {DiaryEntry} from "../components/DiaryEntry";
import CreateDiaryEntryForm from "../components/CreateDiaryEntryForm";
import SubHeader from "../components/SubHeader";
import { DataContext } from "../contexts/DataContextObject";
import { getDairyEntries } from "../services/dairyService";

export default function DiaryPage() {
  const { dairyEntries, user, setDairyEntries } = useContext(DataContext);

  useEffect(() => {
    getDairyEntries( user!.id ).then(e => setDairyEntries(e));
  }, [] );
  
  const [creatingNewEntry, setCreatingNewEntry] = useState<boolean>(false);


  function addNewEntry(): void {
    setCreatingNewEntry(true);
  }

  function cancelNewEntry(): void {
    setCreatingNewEntry(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <main className="container mx-auto px-6 flex flex-col justify-center items-center gap-10">
        <SubHeader text="Let's record your thoughts and experiences!" name={ user!.firstName} />
        <h1 className="text-3xl font-bold text-gray-800">Diary page</h1>
        <ul className="">
          {dairyEntries?.map((entry) => (
            <li key={entry.id} className="">
              <DiaryEntry model={entry} />
            </li>
          ))}
        </ul>
        {creatingNewEntry ? (
          <CreateDiaryEntryForm
            cancelNewEntry={cancelNewEntry}
          />
        ) : (
          <></>
        )}
        <button
          type="button"
          onClick={addNewEntry}
          className="border rounded-md hover:cursor-pointer py-1 px-5"
        >
          New Entry
        </button>
      </main>
    </div>
  );
}
