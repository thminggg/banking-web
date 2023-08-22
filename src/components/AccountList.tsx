import { AccountListData, SupportedCountries } from "@/types/account";
import AccountListItem from "./AccountListItem";
import styles from "@/styles/accountList.module.css";
import Grid from "@mui/material/Grid";

const countryNameMap: { [key in SupportedCountries]: string } = {
  [SupportedCountries.CA]: "Canada 🇨🇦",
  [SupportedCountries.US]: "United States of America 🇺🇸",
  [SupportedCountries.HK]: "Hong Kong 🇭🇰",
  [SupportedCountries.AU]: "Australia 🇦🇺",
  [SupportedCountries.NZ]: "New Zealand 🇳🇿",
};

export default function AccountList({
  accounts,
}: {
  accounts: AccountListData;
}) {
  return (
    <Grid container rowGap={6}>
      {Object.values(SupportedCountries).map((country) => {
        return (
          accounts?.[country] && (
            <Grid item xs={12} key={country}>
              <p className={styles.country}>{countryNameMap[country]}</p>
              {accounts[country]?.map((acc) => {
                return (
                  <AccountListItem
                    country={country}
                    account={acc}
                    key={acc.id}
                  />
                );
              })}
            </Grid>
          )
        );
      })}
    </Grid>
  );
}
