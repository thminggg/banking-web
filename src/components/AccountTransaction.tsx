import { Account } from "@/types/account";
import Grid from "@mui/material/Grid";
import CenterText from "./CenterText";
import { formatCurrency } from "@/utils/utils";
import AccountTransactionList from "./AccountTransactionList";

export default function AccountTransaction({ account }: { account: Account }) {
  const formattedAmout = formatCurrency(account.country, account.amount);

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={12}>
        <CenterText text={account.name} />
      </Grid>
      <Grid item xs={12}>
        <CenterText text={account.id} />
      </Grid>
      <Grid item xs={12}>
        <CenterText text="Ledger balance" />
      </Grid>
      <Grid item xs={12}>
        <CenterText text={`${formattedAmout}`} />
      </Grid>
      <Grid item xs={12}>
        <CenterText text={`Available balance: ${formattedAmout}`} />
      </Grid>
      <AccountTransactionList />
    </Grid>
  );
}
