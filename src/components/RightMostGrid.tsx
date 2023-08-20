import Grid, { GridProps } from "@mui/material/Grid";
import "../styles/globals.css";

interface IRightMostGrid extends GridProps {
  children: React.ReactNode;
}

export default function RightMostGrid<IRightMostGrid>({
  children,
  ...gridProps
}: GridProps) {
  return (
    <Grid item style={{ marginLeft: "auto" }} {...gridProps}>
      {children}
    </Grid>
  );
}
