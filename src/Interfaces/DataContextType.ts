import type { ReactNode } from "react";
import type { User } from "./User";
import type { DairyModel } from "./DairyModel";

interface DataContextType {
  notices: string[]
  user: User | null;
  setUser: (user: User | null) => void;
  isInitialized: boolean;
  setInitialized: ( init: boolean ) => void;
  dairyEntries: DairyModel[] | null;
  setDairyEntries: (entries: DairyModel[]) => void
}

interface DataProviderProps {
  children: ReactNode;
}

export type { DataContextType, DataProviderProps}