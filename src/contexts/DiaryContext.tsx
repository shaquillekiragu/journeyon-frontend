import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { IDiaryEntry } from "../interfaces";
import { getUserDetails } from "../api";

interface DiaryContextType {
  entriesList: IDiaryEntry[];
  setEntriesList: (entries: IDiaryEntry[]) => void;
  addEntry: (entry: IDiaryEntry) => void;
  isLoading: boolean;
  showError: boolean;
  fetchDiaryEntries: (userId: number) => Promise<void>;
}

const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

export { DiaryContext };

export default function DiaryProvider({ children }: { children: ReactNode }) {
  const [entriesList, setEntriesList] = useState<IDiaryEntry[]>(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  // Save entries to localStorage whenever entriesList changes
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entriesList));
  }, [entriesList]);

  const fetchDiaryEntries = async (userId: number) => {
    setIsLoading(true);
    try {
      const response = await getUserDetails(userId);
      if (response && response.data && response.data.diary_entries) {
        setEntriesList(response.data.diary_entries);
        setShowError(false);
      } else {
        // Keep existing entries if API doesn't return any
        setShowError(false);
      }
    } catch (error) {
      console.error("Failed to fetch diary entries:", error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const addEntry = (entry: IDiaryEntry) => {
    setEntriesList((prevEntries) => [entry, ...prevEntries]); // Add new entry to the beginning (newest first)
  };

  const value = {
    entriesList,
    setEntriesList,
    addEntry,
    isLoading,
    showError,
    fetchDiaryEntries,
  };

  return (
    <DiaryContext.Provider value={value}>
      {children}
    </DiaryContext.Provider>
  );
}
