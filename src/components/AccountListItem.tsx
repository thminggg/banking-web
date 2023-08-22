import { Account, Currencies, SupportedCountries } from "@/types/account";
import Grid from "@mui/material/Grid";
import styles from "@/styles/accountListItem.module.css";
import RightMostGrid from "./RightMostGrid";

export default function AccountListItem({
  country,
  account,
}: {
  country: SupportedCountries;
  account: Account;
}) {
  const _amount = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: Currencies[country],
  }).format(account.amount);

  return (
    <Grid
      container
      direction="row"
      key={account.id}
      className={styles.seperatedLine}
    >
      {/* Account Name & Acconut Number */}
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item xs={6}>
            {account.name}
          </Grid>
          <Grid item xs={6} className={styles.accountNumber}>
            {account.id}
          </Grid>
        </Grid>
      </Grid>
      {/* Account Balance */}
      <RightMostGrid className={styles.amount}>{_amount}</RightMostGrid>
    </Grid>
  );
}
