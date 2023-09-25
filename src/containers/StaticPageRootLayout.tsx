import ThemeWrapper from "@/containers/ThemeWrapper";
import { UserProvider } from "@/contexts/userContext";
import "@/styles/globals.css";

export default function StaticPageRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      <UserProvider>
        <div className={`main`}>{children}</div>
      </UserProvider>
    </ThemeWrapper>
  );
}
