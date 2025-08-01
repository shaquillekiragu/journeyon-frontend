import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import DiaryEntry from "../components/DiaryEntry";
import CreateDiaryEntryForm from "../components/CreateDiaryEntryForm";
import { getTodaysDate } from "../utils/getTodaysDate";
import SubHeader from "../components/SubHeader";
import { useData } from "../contexts/DataContext";
import Loading from "../components/Loading";
import type { IDiaryEntry } from "../interfaces";

export default function DiaryPage(): React.ReactElement {
  const { loggedInUser } = useData();

  const [entriesList, setEntriesList] = useState<IDiaryEntry[]>([]);
  const [creatingNewEntry, setCreatingNewEntry] = useState<boolean>(false);
  const [entryIdCounter, setEntryIdCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

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

  if (isLoading) {
    return <Loading page="Diary" />;
  } else {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#fefbf1" }}>
        <Header />
        <Navbar />
        <section className="container mx-auto px-6 flex flex-col justify-center items-center gap-10">
          <SubHeader
            text="Let's record your thoughts and experiences!"
            showProgress={false}
            totalItems={0}
          />
          <h1 className="text-3xl font-bold text-gray-800">Diary page</h1>
          <div className="flex justify-center items-center">
            <p
              className={`font-semibold text-red-500 ${
                showError ? "visible" : "hidden"
              }`}
            >
              Failed to load diary entries. Please try again later.
            </p>
          </div>
          
          {!creatingNewEntry && (
            <button
              type="button"
              onClick={addNewEntry}
              className="bg-white text-gray-800 font-semibold border-2 border-gray-800 rounded-md py-3 px-8 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200 underline"
              style={{
                borderColor: "#5c7fa3",
                color: "#5c7fa3",
              }}
            >
              New Entry
            </button>
          )}

          {creatingNewEntry && (
            <CreateDiaryEntryForm
              handleSubmit={handleSubmit}
              cancelNewEntry={cancelNewEntry}
            />
          )}

          <div className="w-full max-w-4xl flex flex-col items-center">
            {entriesList.map((entry) => (
              <DiaryEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
