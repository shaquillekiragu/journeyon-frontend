import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import DiaryEntry from "../components/DiaryEntry";
import CreateDiaryEntryForm from "../components/CreateDiaryEntryForm";
import { getTodaysDate } from "../utils/getTodaysDate";
import SubHeader from "../components/SubHeader";
import { getUserDetails } from "../api";
import { useAuth } from "../contexts/UserContext";
import Loading from "../components/Loading";
import type { IDiaryEntry } from "../interfaces";

export default function DiaryPage(): React.ReactElement {
  const { loggedInUser } = useAuth();

  const [entriesList, setEntriesList] = useState<IDiaryEntry[]>([]);
  const [creatingNewEntry, setCreatingNewEntry] = useState<boolean>(false);
  const [entryIdCounter, setEntryIdCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    async function fetchDairyEntries(userId: number) {
      try {
        const response = (await getUserDetails(userId)) as any;
        if (response && response.data && response.data.diary_entries) {
          setEntriesList(response.data.diary_entries);
          setShowError(false);
        } else {
          setEntriesList([]);
          setShowError(false);
        }
      } catch (err) {
        setShowError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (loggedInUser && loggedInUser.id) {
      fetchDairyEntries(loggedInUser.id);
    }
  }, [loggedInUser]);

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
        <section className="container mx-auto px-6 flex flex-col justify-center items-center gap-10 py-8">
          <SubHeader text="Let's record your thoughts and experiences!" showProgress={false} totalItems={0} />
          <h1 className="text-4xl font-bold text-gray-800">Diary Page</h1>
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
