import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { IDiaryEntry } from "../interfaces";

interface DiaryContextType {
  entries: IDiaryEntry[];
  addEntry: (entry: Omit<IDiaryEntry, 'id'>) => void;
  deleteEntry: (id: number) => void;
  updateEntry: (id: number, updatedEntry: Partial<IDiaryEntry>) => void;
}

const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

interface DiaryProviderProps {
  children: ReactNode;
}

export function DiaryProvider({ children }: DiaryProviderProps) {
  const [entries, setEntries] = useState<IDiaryEntry[]>([]);
  const [nextId, setNextId] = useState(1);

  const addEntry = (entry: Omit<IDiaryEntry, 'id'>) => {
    const newEntry: IDiaryEntry = {
      ...entry,
      id: nextId,
    };
    setEntries(prev => [...prev, newEntry]);
    setNextId(prev => prev + 1);
  };

  const deleteEntry = (id: number) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const updateEntry = (id: number, updatedEntry: Partial<IDiaryEntry>) => {
    setEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { ...entry, ...updatedEntry } : entry
      )
    );
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry, deleteEntry, updateEntry }}>
      {children}
    </DiaryContext.Provider>
  );
}

export { DiaryContext };
