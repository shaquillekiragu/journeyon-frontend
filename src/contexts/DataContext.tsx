import type { User } from "../Interfaces/User";
import type { DataProviderProps } from "../Interfaces/DataContextType";
import { useEffect, useState, type FC } from 'react';
import { DataContext } from './DataContextObject';
import { getCachedUser } from '../services/authService';


export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const cached = getCachedUser();
    if (cached) {
      setUser(cached);
    }
    }, [] );
  
  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};
