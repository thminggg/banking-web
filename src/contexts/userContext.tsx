"use client";

import { User, UserContextType } from "@/types/user";
import React, { createContext, useContext, useState } from "react";

const defaultUser = {
  name: "",
};

// Create a context
const UserContext = createContext<UserContextType | null>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(defaultUser);
  const saveUser = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
}
