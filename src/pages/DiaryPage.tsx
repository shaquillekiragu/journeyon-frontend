import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import DiaryEntry from "../components/DiaryEntry";
import CreateDiaryEntryForm from "../components/CreateDiaryEntryForm";
import { getTodaysDate } from "../utils/getTodaysDate";
import SubHeader from "../components/SubHeader";

export default function DiaryPage(): React.ReactElement {
  interface IDiaryEntry {
    id: number;
    title: string;
    body: string;
    date: string;
  }

  const [entriesList, setEntriesList] = useState<IDiaryEntry[]>([]);
  const [creatingNewEntry, setCreatingNewEntry] = useState<boolean>(false);
  const [entryIdCounter, setEntryIdCounter] = useState<number>(0);

  function handleSubmit(event: any): void {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newEntry: IDiaryEntry = {
      id: entryIdCounter,
      title: formData.get("entryTitle") as string,
      body: formData.get("entryBody") as string,
      date: getTodaysDate(),
    };

    setEntriesList((prevEntries) => [...prevEntries, newEntry]);
    setEntryIdCounter((prevCounter) => prevCounter + 1);
    setCreatingNewEntry(false);
  }

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
      <main className="container mx-auto px-6 py-8 flex flex-col justify-center items-center gap-10">
      <SubHeader text="Let's record your thoughts and experiences!" />
        <h1 className="text-3xl font-bold text-gray-800">Diary page</h1>
        <ul className="">
          {entriesList.map((entry) => (
            <li key={entry.id} className="">
              <DiaryEntry entry={entry} />
            </li>
          ))}
        </ul>
        {creatingNewEntry ? (
          <CreateDiaryEntryForm
            handleSubmit={handleSubmit}
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
