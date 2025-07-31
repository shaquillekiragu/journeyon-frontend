import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface UserContextType {
  authUser: any | null;
  setAuthUser: (user: any | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function useAuth() {
  return useContext(UserContext);
}

export default function UserProvider({ children }: { children: ReactNode }) {
  const [authUser, setAuthUser] = useState(() => {
    const savedUser = localStorage.getItem("authUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("authUser");
      setIsLoggedIn(false);
    }
  }, [authUser]);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
