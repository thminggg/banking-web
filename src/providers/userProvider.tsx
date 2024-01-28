"use client";

import { User, UserContextType } from "@/types/user";
import { sessGetItem, sessSetItem } from "@/utils/sessionStorage";
import React, { createContext, useContext, useState } from "react";
import useSWR, { mutate } from "swr";

const defaultUser = {
  name: "",
};

// Create a context
const UserContext = createContext<UserContextType | null>(null);

/**
 * Use the user context with SWR to handle SSR gracefully
 * Notes: Prevent error of
 * https://stackoverflow.com/questions/66374123/warning-text-content-did-not-match-server-im-out-client-im-in-div
 */
export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  const { user, saveUser } = context;
  const { data, error, isLoading } = useSWR("sessUser", () => user);

  // Revalidate before using it
  mutate("sessUser");

  return {
    user: data,
    saveUser,
    error,
    isLoading,
  };
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  // Retrieve user from session storage
  const localUser = sessGetItem("user");
  const _user = localUser || defaultUser;

  const [user, setUser] = useState<User | null>(_user);
  const saveUser = (user: User) => {
    setUser(user);

    // Save user in session storage
    sessSetItem("user", user);
  };

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
}
