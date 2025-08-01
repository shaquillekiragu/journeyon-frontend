import type { User } from "../Interfaces/User";
import type { DataProviderProps } from "../Interfaces/DataContextType";
import { useEffect, useState, type FC } from "react";
import { DataContext } from "./DataContextObject";
import { useAuth } from "./UserContext";

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setInitialized] = useState(false);
  const { loggedInUser } = useAuth();

  useEffect(() => {
    if (loggedInUser && loggedInUser.user) {
      const convertedUser: User = {
        id: loggedInUser.user.id,
        firstName: loggedInUser.user.first_name,
        lastName: loggedInUser.user.last_name,
        courseId: 1,
        progressScore: 0,
        email: loggedInUser.user.email,
        role: "student",
        tokenData: {
          access_token: "",
          token_expiration: new Date().toISOString(),
        },
      };
      setUser(convertedUser);
    } else {
      setUser(null);
    }
    setInitialized(true);
  }, [loggedInUser]);

  return (
    <DataContext.Provider
      value={{ user, setUser, isInitialized, setInitialized }}
    >
      {children}
    </DataContext.Provider>
  );
};
