import { FirebaseApp } from "firebase/app";
import { Analytics } from "firebase/analytics";

export type FirebaseServices = {
  firebaseApp: FirebaseApp;
  firebaseAnalytics?: Analytics;
};
