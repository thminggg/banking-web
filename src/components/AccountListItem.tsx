import styles from "@/styles/accountListItem.module.css";
import { Account, SupportedCountries } from "@/types/account";
import { formatCurrency } from "@/utils/utils";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";
import React from "react";
import LeftMostGrid from "./LeftMostGrid";
import RightMostGrid from "./RightMostGrid";

export default function AccountListItem({
  country,
  account,
}: {
  country: SupportedCountries;
  account: Account;
}) {
  const router = useRouter();
  const formattedAmout = formatCurrency(country, account.amount);

  const handleAccountClick = (event: React.MouseEvent<HTMLInputElement>) => {
    router.push(`/account-transactions/${account.country}_${account.id}`);
  };

  return (
    <ButtonBase className={`${styles.item} ${styles.itemButton}`}>
      <Grid
        container
        direction="row"
        className={styles.seperatedLine}
        onClick={handleAccountClick}
      >
        {/* Account Name & Acconut Number */}
        <Grid item xs={6}>
          <Grid container direction="column">
            <LeftMostGrid item xs={6} className={styles.accountName}>
              {account.name}
            </LeftMostGrid>
            <LeftMostGrid item xs={6} className={styles.accountNumber}>
              {account.id}
            </LeftMostGrid>
          </Grid>
        </Grid>
        {/* Account Balance */}
        <RightMostGrid className={styles.amount}>
          {formattedAmout}
        </RightMostGrid>
      </Grid>
    </ButtonBase>
  );
}
