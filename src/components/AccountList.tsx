import { useUserContext } from "@/contexts/userContext";
import styles from "@/styles/accountList.module.css";
import { AccountListData, SupportedCountries } from "@/types/account";
import { UserContextType } from "@/types/user";
import Grid from "@mui/material/Grid";
import AccountListItem from "./AccountListItem";

type PropsType = { accounts: AccountListData };

const countryNameMap: { [key in SupportedCountries]: string } = {
  [SupportedCountries.CA]: "Canada 🇨🇦",
  [SupportedCountries.US]: "United States of America 🇺🇸",
  [SupportedCountries.HK]: "Hong Kong 🇭🇰",
  [SupportedCountries.AU]: "Australia 🇦🇺",
  [SupportedCountries.NZ]: "New Zealand 🇳🇿",
};

export default function AccountList({ accounts }: PropsType) {
  const { user } = useUserContext() as UserContextType;

  return (
    <>
      <p>Welcome back {user?.name}!</p>
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
    </>
  );
}
