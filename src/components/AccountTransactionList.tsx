import Grid from "@mui/material/Grid";
import LeftMostGrid from "./LeftMostGrid";
import Resizable from "./VerticalResizable";

export default function AccountTransactionList() {
  return (
    <Grid container direction="row" justifyContent="center">
      <Resizable>
        <LeftMostGrid>
          <p>Transaction History</p>
        </LeftMostGrid>
      </Resizable>
    </Grid>
  );
}
