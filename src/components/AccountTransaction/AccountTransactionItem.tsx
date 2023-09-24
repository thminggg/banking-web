import styles from "@/styles/accountTransactionListItem.module.css";
import { AccountTransaction } from "@/types/accountTransaction";
import { formatCurrency, formatDate } from "@/utils/utils";
import Grid from "@mui/material/Grid";
import LeftMostGrid from "@/components/LeftMostGrid";
import RightMostGrid from "@/components/RightMostGrid";

export default function AccountTransactionItem({
  item,
}: {
  item: AccountTransaction;
}) {
  const { date, summary, amount, country } = item;
  const formattedAmount = formatCurrency(country, amount);
  const formattedDate = formatDate(country, date);

  return (
    <Grid container direction="row" className={styles.item}>
      <Grid item xs={12}>
        {formattedDate}
      </Grid>
      {/* Transaction Summary */}
      <Grid item xs={6}>
        <Grid container direction="column">
          <LeftMostGrid xs={6}>{summary}</LeftMostGrid>
        </Grid>
      </Grid>
      {/* Transaction Amount */}
      <RightMostGrid style={{ paddingRight: "1em" }}>
        {formattedAmount}
      </RightMostGrid>
    </Grid>
  );
}
