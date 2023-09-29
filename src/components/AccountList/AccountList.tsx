import { useUserContext } from "@/contexts/userContext";
import styles from "@/styles/accountList.module.css";
import { AccountListData, SupportedCountries } from "@/types/account";
import { UserContextType } from "@/types/user";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const { user } = useUserContext() as UserContextType;

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={6}>
          {user?.name && <p>Welcome back {user?.name}!</p>}
        </Grid>
        <Grid item xs={6} className={styles.logoutButton}>
          <Button onClick={handleLogout}>Logout</Button>
        </Grid>
      </Grid>
      <Grid container rowGap={6} paddingBottom={12}>
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
