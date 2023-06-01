import React, { createContext, useState } from "react";
/**
 * * As a matter of future value in useContext
 */

type User = {
  name: string;
  email: string;
};

type ProviderPropType = {
  children: React.ReactNode;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

//* To avoid null check for context everywhere, we can use initial value as empty object of type UserContextType [ Type Assertion ]
export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export const UserProvider = ({ children }: ProviderPropType) => {
  const [user, setUser] = useState<User | null>({
    name: "Guest",
    email: "N/A",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
