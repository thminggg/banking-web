// Create a context
"use client";

import {
  PositionedSnackbarContextType,
  PositionedSnackbarState,
} from "@/types/positionedSnabckbar";
import React, { createContext, useContext, useState } from "react";

const defaultState: PositionedSnackbarState = {
  open: false,
  message: "",
  severity: "info",
  vertical: "top",
  horizontal: "center",
};

export const PositionedSnackbarContext =
  createContext<PositionedSnackbarContextType>({
    state: defaultState,
    setPositionedSnackbarOpen: (newState) => () => {},
    setPositionedSnackbarClose: (event, reason) => {},
  });

export function usePositionedSnackbarContext() {
  const { state, setPositionedSnackbarOpen, setPositionedSnackbarClose } =
    useContext(PositionedSnackbarContext) as PositionedSnackbarContextType;

  return { state, setPositionedSnackbarOpen, setPositionedSnackbarClose };
}

export function PositionedSnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<PositionedSnackbarState>(defaultState);

  // Open
  const setPositionedSnackbarOpen =
    (newState: Omit<PositionedSnackbarState, "open">) => () => {
      setState({ ...newState, open: true });
    };

  // Close
  const setPositionedSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    console.log(reason);
    setState({ ...state, open: false });
  };

  return (
    <PositionedSnackbarContext.Provider
      value={{ state, setPositionedSnackbarOpen, setPositionedSnackbarClose }}
    >
      {children}
    </PositionedSnackbarContext.Provider>
  );
}
