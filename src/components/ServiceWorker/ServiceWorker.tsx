"use client";

export default function ServiceWorker() {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/banking-web/sw.js");
        // .then((registration) =>
        //   console.log("scope is: ", registration.scope)
        // );
      }
    });
  }

  return <></>;
}
