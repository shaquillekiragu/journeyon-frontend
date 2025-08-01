import { createContext } from "react";
import type { DataContextType } from "../Interfaces/DataContextType";

export const DataContext = createContext<DataContextType>( {
  notices: [],
  user: null,
  setUser: () => { },
  isInitialized: false,
  setInitialized: () => { },
  dairyEntries: null,
  setDairyEntries: () => {}
});
