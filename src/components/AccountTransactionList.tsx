import Grid from "@mui/material/Grid";
import LeftMostGrid from "./LeftMostGrid";
import VerticalResizable from "./VerticalResizable";

export default function AccountTransactionList() {
  return (
    <Grid container direction="row" justifyContent="center">
      <VerticalResizable>
        <LeftMostGrid>
          <p>Transaction History</p>
        </LeftMostGrid>
      </VerticalResizable>
    </Grid>
  );
}
