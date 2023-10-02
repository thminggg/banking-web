import AccountTransactionList from "@/components/AccountTransaction/AccountTransactionList";
import LeftMostGrid from "@/components/LeftMostGrid";
import CenterText from "@/components/Text/CenterText";
import TransferDialog from "@/components/Transfer/TransferDialog";
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
import { MouseEventHandler, RefObject, useRef, useState } from "react";

/* Back Arrow */
const BackButton = ({
  handleGoBack,
}: {
  handleGoBack: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <LeftMostGrid xs={12}>
      <ButtonBase onClick={handleGoBack}>
        <ArrowBackIcon />
      </ButtonBase>
    </LeftMostGrid>
  );
};

/* Account Summary */
const AccountSummary = ({
  account,
  formattedAmount,
}: {
  account: Account;
  formattedAmount: string;
}) => {
  return (
    <>
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
            text={`${formattedAmount}`}
          />
        </Grid>
        <Grid item xs={12}>
          <CenterText text={`Available balance: ${formattedAmount}`} />
        </Grid>
      </Grid>
    </>
  );
};

/* Account Actions */
const AccountActions = ({
  linkRef,
  open,
  handleOpenEStatement,
  handleOpenDialog,
  handleCloseDialog,
}: {
  linkRef: RefObject<HTMLAnchorElement>;
  open: boolean;
  handleOpenEStatement: MouseEventHandler<HTMLButtonElement>;
  handleOpenDialog: MouseEventHandler<HTMLButtonElement>;
  handleCloseDialog: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
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
        onClick={handleOpenDialog}
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
      <TransferDialog open={open} handleClose={handleCloseDialog} />
    </Grid>
  );
};

export default function AccountTransaction({ account }: { account: Account }) {
  const router = useRouter();
  const formattedAmount = formatCurrency(account.country, account.amount);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [open, setOpen] = useState(false);

  const handleGoBack = () => {
    // Proceed
    router.push("/account-list");
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenEStatement = () => {
    // Click the <Link /> with reference
    linkRef.current?.click();
  };

  return (
    <Grid container direction="row">
      <BackButton handleGoBack={handleGoBack} />
      <AccountSummary account={account} formattedAmount={formattedAmount} />
      <AccountActions
        open={open}
        linkRef={linkRef}
        handleOpenDialog={handleOpenDialog}
        handleCloseDialog={handleCloseDialog}
        handleOpenEStatement={handleOpenEStatement}
      />
      <AccountTransactionList accountId={account.id} />
    </Grid>
  );
}
