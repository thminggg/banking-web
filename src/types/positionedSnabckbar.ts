import { AlertColor } from "@mui/material/Alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";

export type PositionedSnackbarState = SnackbarOrigin & {
  open: boolean;
  message: string;
  severity: AlertColor;
};

export type PositionedSnackbarContextType = {
  state: PositionedSnackbarState;
  setPositionedSnackbarOpen: (
    newState: Omit<PositionedSnackbarState, "open">
  ) => () => void;
  setPositionedSnackbarClose: (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => void;
};
