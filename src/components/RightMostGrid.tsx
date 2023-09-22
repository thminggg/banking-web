import Grid, { GridProps } from "@mui/material/Grid";

export default function RightMostGrid({
  children,
  style,
  ...gridProps
}: GridProps) {
  return (
    <Grid item style={{ marginLeft: "auto", ...style }} {...gridProps}>
      {children}
    </Grid>
  );
}
