import { SupportedCountries } from "@/types/account";
import { formatCurrency } from "@/utils/utils";
import Grid from "@mui/material/Grid";
import LeftMostGrid from "./LeftMostGrid";
import RightMostGrid from "./RightMostGrid";
import styles from "@/styles/accountTransactionListItem.module.css";

export default function AccountTransactionItem({
  item,
}: {
  item: {
    date: string;
    summary: string;
    amount: number;
    country: SupportedCountries;
  };
}) {
  const { date, summary, amount, country } = item;
  const formattedAmount = formatCurrency(country, amount);

  return (
    <Grid container direction="row" className={styles.item}>
      {/* Account Name & Acconut Number */}
      <Grid item xs={6}>
        <Grid container direction="column">
          <LeftMostGrid item xs={6}>
            {summary}
          </LeftMostGrid>
        </Grid>
      </Grid>
      {/* Account Balance */}
      <RightMostGrid>{formattedAmount}</RightMostGrid>
    </Grid>
  );
}
