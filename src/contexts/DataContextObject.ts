import { createContext } from "react";
import type { DataContextType } from "../Interfaces/DataContextType";

export const DataContext = createContext<DataContextType>( {
  user: null,
  setUser: () => { },
  isInitialized: false,
  setInitialized: () => { },
});
