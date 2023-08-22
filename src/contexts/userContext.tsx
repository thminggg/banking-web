import { IUser, IUserContextType } from "@/types/user";
import React, { createContext, useContext, useState } from "react";

const defaultUser = {
  name: "",
};

// Create a context
const UserContext = createContext<IUserContextType | null>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(defaultUser);
  const saveUser = (user: IUser) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
}
