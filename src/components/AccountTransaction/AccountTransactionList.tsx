import { accountTransactions } from "@/data/accountTransactions";
import styles from "@/styles/accountTransactionList.module.css";
import Grid from "@mui/material/Grid";
import AccountTransactionItem from "./AccountTransactionItem";
import LeftMostGrid from "@/components/LeftMostGrid";
import VerticalResizable from "@/components/VerticalResizable";

export default function AccountTransactionList({
  accountId,
}: {
  accountId: string;
}) {
  return (
    <Grid container direction="row">
      <VerticalResizable>
        <LeftMostGrid style={{ marginLeft: "1em", marginBottom: "1em" }}>
          <p>Transaction History</p>
        </LeftMostGrid>
        {accountTransactions?.[accountId] ? (
          accountTransactions[accountId].map((item) => {
            return (
              <Grid item xs={12} key={item.id}>
                <AccountTransactionItem item={item} />
              </Grid>
            );
          })
        ) : (
          <p className={styles.noTransactionsText}>
            You have no transaction in the past 3 months
          </p>
        )}
      </VerticalResizable>
    </Grid>
  );
}
