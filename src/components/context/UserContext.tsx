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

type UserContextPropType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// To avoid context check everywhere, we can use initial value as empty object
export const UserContext = createContext<UserContextPropType>(
  {} as UserContextPropType,
);

export const UserProvider = ({ children }: ProviderPropType) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
