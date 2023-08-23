import Grid, { GridProps } from "@mui/material/Grid";

export default function RightMostGrid({ children, ...gridProps }: GridProps) {
  return (
    <Grid item style={{ marginLeft: "auto" }} {...gridProps}>
      {children}
    </Grid>
  );
}
