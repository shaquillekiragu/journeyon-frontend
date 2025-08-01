// import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { DiaryEntry } from "../components/DiaryEntry";
import CreateDiaryEntryForm from "../components/CreateDiaryEntryForm";
import SubHeader from "../components/SubHeader";
import { DataContext } from "../contexts/DataContextObject";
import { getDairyEntries } from "../services/dairyService";
import type { IDiaryEntry } from "../interfaces";
// import { getUserDetails } from "../api";
// import { useAuth } from "../contexts/UserContext";
// import Loading from "../components/Loading";
// import type { IDiaryEntry } from "../interfaces";

// export default function DiaryPage(): React.ReactElement {
//   const { loggedInUser } = useAuth();

export default function DiaryPage() {
  const { dairyEntries, user, setDairyEntries } = useContext(DataContext);

  useEffect(() => {
    getDairyEntries(user!.id).then((e) => setDairyEntries(e));
  }, []);

  const [creatingNewEntry, setCreatingNewEntry] = useState<boolean>(false);
  // const [entryIdCounter, setEntryIdCounter] = useState<number>(0);
  // const [isLoading, setIsLoading] = useState(true);
  // const [showError, setShowError] = useState(false);

  // useEffect(() => {
  //   async function fetchDairyEntries(userId: number) {
  //     try {
  //       const response = (await getUserDetails(userId)) as any;
  //       if (response && response.data && response.data.diary_entries) {
  //         setEntriesList(response.data.diary_entries);
  //         setShowError(false);
  //       } else {
  //         setEntriesList([]);
  //         setShowError(false);
  //       }
  //     } catch (err) {
  //       setShowError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   if (loggedInUser && loggedInUser.id) {
  //     fetchDairyEntries(loggedInUser.id);
  //   }
  // }, [entriesList, loggedInUser]);

  function addNewEntry(): void {
    setCreatingNewEntry(true);
  }

  function cancelNewEntry(): void {
    setCreatingNewEntry(false);
  }

  // if (isLoading) {
  //   return <Loading page="Diary" />;
  // } else {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <Navbar />
        <section className="container mx-auto px-6 flex flex-col justify-center items-center gap-10">
          <SubHeader
            text="Let's record your thoughts and experiences!"
            name={user!.firstName}
          />
          <h1 className="text-3xl font-bold text-gray-800">Diary page</h1>
          <div className="flex justify-center items-center">
            {/* <p
              className={`font-semibold text-red-300 ${
                showError ? "visible" : "hidden"
              }`}
            >
              Failed to load dairy entries. Please try again later.
            </p> */}
          </div>
          {creatingNewEntry ? (
            <CreateDiaryEntryForm
              // handleSubmit={handleSubmit}
              cancelNewEntry={cancelNewEntry}
            />
          ) : (
            <></>
          )}
          <ul className="">
            {dairyEntries?.map((entry: IDiaryEntry) => (
              <li key={entry.id} className="">
                <DiaryEntry model={entry} />
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={addNewEntry}
            className="border rounded-md hover:cursor-pointer py-1 px-5"
          >
            New Entry
          </button>
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
        </section>
      </main>
    );
  }
}
