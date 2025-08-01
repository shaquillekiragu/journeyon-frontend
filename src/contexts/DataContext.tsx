import type { User } from "../Interfaces/User";
import type { DataProviderProps } from "../Interfaces/DataContextType";
import { useEffect, useState, type FC } from 'react';
import { DataContext } from './DataContextObject';
import { getCachedUser } from '../services/authService';
//import type { DairyModel } from "../Interfaces/DairyModel";


export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [ user, setUser ] = useState<User | null>( null );
  const [ isInitialized, setInitialized ] = useState( false );

  useEffect(() => {
    const cached = getCachedUser();
    if (cached) {
      setUser( cached );
    };
    setInitialized( true );
    }, [] );
  
  return (
    <DataContext.Provider value={{ user, setUser, isInitialized, setInitialized }}>
      {children}
    </DataContext.Provider>
  );
};
