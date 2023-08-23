import Grid, { GridProps } from "@mui/material/Grid";

export default function LeftMostGrid({ children, ...gridProps }: GridProps) {
  return (
    <Grid
      item
      style={{ marginRight: "auto", textAlign: "left" }}
      {...gridProps}
    >
      {children}
    </Grid>
  );
}
