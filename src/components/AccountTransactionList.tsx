import { accountTransactions } from "@/data/accountTransactions";
import Grid from "@mui/material/Grid";
import AccountTransactionItem from "./AccountTransactionItem";
import LeftMostGrid from "./LeftMostGrid";
import VerticalResizable from "./VerticalResizable";

export default function AccountTransactionList({
  accountId,
}: {
  accountId: string;
}) {
  return (
    <Grid container direction="row" justifyContent="center">
      <VerticalResizable>
        <LeftMostGrid style={{ marginLeft: "1em", marginBottom: "1em" }}>
          <p>Transaction History</p>
        </LeftMostGrid>
        {accountTransactions[accountId].map((item) => {
          return (
            <Grid item xs={12}>
              <AccountTransactionItem key={item.id} item={item} />
            </Grid>
          );
        })}
      </VerticalResizable>
    </Grid>
  );
}
