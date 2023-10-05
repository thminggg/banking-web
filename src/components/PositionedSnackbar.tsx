"use client";

import { usePositionedSnackbarContext } from "@/providers/positionedSnackbarProvider";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function PositionedSnackbar() {
  // Context Positioned Snackbar State
  const { state, setPositionedSnackbarOpen, setPositionedSnackbarClose } =
    usePositionedSnackbarContext();

  const { open, severity, message, vertical, horizontal } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={setPositionedSnackbarClose}
      key={vertical + horizontal}
    >
      <Alert
        onClose={setPositionedSnackbarClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
