"use client";

import { UserProvider } from "@/contexts/userContext";
import Login from "@/components/Login";

export default function LoginContainer() {
  return (
    <UserProvider>
      <Login />
    </UserProvider>
  );
}
