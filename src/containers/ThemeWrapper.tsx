"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { indigo, teal } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: indigo,
  },
});

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
