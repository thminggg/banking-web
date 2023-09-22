import styles from "@/styles/accountTransaction.module.css";
import { Account } from "@/types/account";
import { formatCurrency } from "@/utils/utils";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArticleIcon from "@mui/icons-material/Article";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ButtonBase from "@mui/material/ButtonBase";
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
        <ButtonBase
          className={styles.actionButton}
          sx={{
            margin: "1em 0",
          }}
        >
          <Grid item xs={2}>
            <ArticleIcon style={{ color: "orange" }} />
          </Grid>
          <Grid item xs={6} className={styles.actionButtonText}>
            eStatements
          </Grid>
          <Grid item xs={3}>
            <ArrowForwardIosSharpIcon />
          </Grid>
        </ButtonBase>
        <ButtonBase
          className={styles.actionButton}
          sx={{
            margin: "1em 0",
          }}
        >
          <Grid item xs={2}>
            <CurrencyExchangeIcon style={{ color: "green" }} />
          </Grid>
          <Grid item xs={6} className={styles.actionButtonText}>
            Interac
          </Grid>
          <Grid item xs={3}>
            <ArrowForwardIosSharpIcon />
          </Grid>
        </ButtonBase>
      </Grid>
      <AccountTransactionList accountId={account.id} />
    </Grid>
  );
}
