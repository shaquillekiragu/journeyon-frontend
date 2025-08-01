import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import DiaryEntry from "../components/DiaryEntry";
import CreateDiaryEntryForm from "../components/CreateDiaryEntryForm";
import { getTodaysDate } from "../utils/getTodaysDate";
import SubHeader from "../components/SubHeader";
import { getUserDetails } from "../api";
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

    if (loggedInUser && loggedInUser.user && loggedInUser.user.id) {
      fetchDairyEntries(loggedInUser.user.id);
    }
  }, [entriesList, loggedInUser]);

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
      <main className="min-h-screen bg-gray-50">
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
              className={`font-semibold text-red-300 ${
                showError ? "visible" : "hidden"
              }`}
            >
              Failed to load dairy entries. Please try again later.
            </p>
          </div>
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
        </section>
      </main>
    );
  }
}
