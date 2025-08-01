import type { User } from "../Interfaces/User";
import type {
  DataContextType,
  DataProviderProps,
} from "../Interfaces/DataContextType";
import { useEffect, useState, type FC, useContext } from "react";
import { DataContext } from "./DataContextObject";
// Custom hook that provides the same interface as useAuth
export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }

  // Convert DataContext interface to match UserContext interface
  return {
    loggedInUser: context.user
      ? {
          user: {
            id: context.user.id,
            email: context.user.email,
            first_name: context.user.firstName,
            last_name: context.user.lastName,
            password: "", // Not stored in DataContext
          },
        }
      : null,
    setLoggedInUser: (user: any) => {
      if (user && user.user) {
        const convertedUser: User = {
          id: user.user.id,
          firstName: user.user.first_name,
          lastName: user.user.last_name,
          courseId: 1,
          progressScore: 0,
          email: user.user.email,
          role: "student",
          tokenData: {
            access_token: "",
            token_expiration: new Date().toISOString(),
          },
        };
        context.setUser(convertedUser);
      } else {
        context.setUser(null);
      }
    },
    isLoggedIn: context.user !== null,
    setIsLoggedIn: (loggedIn: boolean) => {
      if (!loggedIn) {
        context.setUser(null);
      }
    },
  };
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize from localStorage
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  // Update localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <DataContext.Provider
      value={{ user, setUser, isInitialized, setInitialized }}
    >
      {children}
    </DataContext.Provider>
  );
};
