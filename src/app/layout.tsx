import ThemeWrapper from "@/containers/ThemeWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banking Web App",
  description: "Generated by Patrick Tse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <body className={`${inter.className} main`}>{children}</body>
      </ThemeWrapper>
    </html>
  );
}
