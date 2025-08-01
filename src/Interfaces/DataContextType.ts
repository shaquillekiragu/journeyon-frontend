import type { ReactNode } from "react";
import type { User } from "./User";

interface DataContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isInitialized: boolean;
  setInitialized: ( init: boolean ) => void;
}

interface DataProviderProps {
  children: ReactNode;
}

export type { DataContextType, DataProviderProps}