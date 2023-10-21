"use client";

import firebaseConfig from "@/services/firebase/config";
import { FirebaseServices } from "@/types/firebase";
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import React, { createContext, useContext, useEffect } from "react";

// Create a context
const FirebaseContext = createContext<FirebaseServices | null>(null);

// Initialize Firebase
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase services
let firebaseAnalytics: Analytics | undefined;

export function useFirebaseContext() {
  // _firebaseApp is coming from provider's value
  // Note: rename deconstructed firebaseApp to avoid confusion
  const { firebaseApp: _firebaseApp, firebaseAnalytics } = useContext(
    FirebaseContext
  ) as FirebaseServices;

  return {
    firebaseApp: _firebaseApp,
    firebaseAnalytics,
  };
}

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  if (!firebaseAnalytics && typeof window !== "undefined") {
    firebaseAnalytics = getAnalytics(firebaseApp);
  }

  return (
    <FirebaseContext.Provider value={{ firebaseApp, firebaseAnalytics }}>
      {children}
    </FirebaseContext.Provider>
  );
}
