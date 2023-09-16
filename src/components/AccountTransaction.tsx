import styles from "@/styles/accountTransaction.module.css";
import { Account } from "@/types/account";
import { formatCurrency } from "@/utils/utils";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AccountTransactionList from "./AccountTransactionList";
import CenterText from "./Text/CenterText";

export default function AccountTransaction({ account }: { account: Account }) {
  const formattedAmout = formatCurrency(account.country, account.amount);

  return (
    <Grid container direction="row">
      {/* Account Info */}
      <Grid item xs={12}>
        <CenterText className={styles.accountName} text={account.name} />
      </Grid>
      <Grid item xs={12}>
        <CenterText className={styles.accountId} text={account.id} />
      </Grid>
      {/* Account Balance */}
      <Grid container direction="row" className={styles.section}>
        <Grid item xs={12}>
          <CenterText text="Ledger balance" />
        </Grid>
        <Grid item xs={12}>
          <CenterText
            className={styles.accountBalance}
            text={`${formattedAmout}`}
          />
        </Grid>
        <Grid item xs={12}>
          <CenterText text={`Available balance: ${formattedAmout}`} />
        </Grid>
      </Grid>
      {/* Actions */}
      <Grid container direction="row" className={styles.section}>
        <Grid item xs={12} className={styles.actionButton}>
          <Button variant="contained">eStatements</Button>
        </Grid>
        <Grid item xs={12} className={styles.actionButton}>
          <Button variant="contained">interac</Button>
        </Grid>
      </Grid>
      <AccountTransactionList />
    </Grid>
  );
}
