import ThemeWrapper from "@/containers/ThemeWrapper";
import { UserProvider } from "@/providers/userProvider";
import { PositionedSnackbarProvider } from "@/providers/positionedSnackbarProvider";
import PositionedSnackbar from "@/components/PositionedSnackbar";
import "@/styles/globals.css";

export default function StaticPageRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      <UserProvider>
        <PositionedSnackbarProvider>
          <div className={`main`}>
            <PositionedSnackbar />
            {children}
          </div>
        </PositionedSnackbarProvider>
      </UserProvider>
    </ThemeWrapper>
  );
}
