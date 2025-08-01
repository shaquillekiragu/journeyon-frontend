import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { UserContextType } from "../interfaces";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function useAuth() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}

export default function UserProvider({ children }: { children: ReactNode }) {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("loggedInUser");
      setIsLoggedIn(false);
    }
  }, [loggedInUser]);

  const value = {
    loggedInUser,
    setLoggedInUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
