import { useUserContext } from "@/providers/userProvider";
import ccLogo from "@/public/icons/undraw_credit_card_payments_re_qboh.svg";
import styles from "@/styles/accountList.module.css";
import { AccountListData, SupportedCountries } from "@/types/account";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
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

const Welcome = ({ name }: { name?: string }) => {
  return <p>Welcome back {name}!</p>;
};

export default function AccountList({ accounts }: PropsType) {
  const router = useRouter();
  const { user, saveUser } = useUserContext();

  const handleLogout = () => {
    saveUser({ name: "" });
    router.push("/home");
  };

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={6}>
          <Welcome name={user?.name} />
        </Grid>
        <Grid item xs={6} className={styles.logoutButtonGrid}>
          <Button onClick={handleLogout}>Logout</Button>
        </Grid>
      </Grid>
      <Grid container rowGap={6} paddingBottom={12}>
        <Grid
          container
          className={styles.summary}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={5}>
            <Image
              src={ccLogo}
              className={styles.adImg}
              alt="Credit card"
              priority
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <p>Apply 5% Cashback Visa credit card</p>
          </Grid>
        </Grid>
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
