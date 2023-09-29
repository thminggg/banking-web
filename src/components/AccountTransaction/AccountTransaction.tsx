import AccountTransactionList from "@/components/AccountTransaction/AccountTransactionList";
import LeftMostGrid from "@/components/LeftMostGrid";
import CenterText from "@/components/Text/CenterText";
import styles from "@/styles/accountTransaction.module.css";
import { Account } from "@/types/account";
import { formatCurrency } from "@/utils/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArticleIcon from "@mui/icons-material/Article";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function AccountTransaction({ account }: { account: Account }) {
  const router = useRouter();
  const formattedAmout = formatCurrency(account.country, account.amount);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleGoBack = () => {
    // Proceed
    router.push("/account-list");
  };

  const handleOpenEStatement = () => {
    // Click the <Link /> with reference
    linkRef.current?.click();
  };

  return (
    <Grid container direction="row">
      {/* Back Arrow */}
      <LeftMostGrid xs={12}>
        <ButtonBase onClick={handleGoBack}>
          <ArrowBackIcon />
        </ButtonBase>
      </LeftMostGrid>
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
          onClick={handleOpenEStatement}
        >
          <Grid item xs={2}>
            <ArticleIcon className={styles.eStatementIcon} />
          </Grid>
          <Grid item xs={6} className={styles.actionButtonText}>
            eStatements
          </Grid>
          <Grid item xs={3}>
            <ArrowForwardIosSharpIcon />
          </Grid>
        </ButtonBase>
        {/* Hidden Link */}
        <Link
          ref={linkRef}
          className={styles.hidden}
          href="/attachments/Mock-Bank-Statement.pdf"
          target="_blank"
        />
        <ButtonBase
          className={styles.actionButton}
          sx={{
            margin: "1em 0",
          }}
        >
          <Grid item xs={2}>
            <CurrencyExchangeIcon className={styles.transferIcon} />
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
