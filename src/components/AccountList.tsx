import { IAccountList } from "@/types/account";
import AccountListItem from "./AccountListItem";
import Grid from "@mui/material/Grid";

export default function AccountList({ accounts }: { accounts: IAccountList }) {
  const { CANADA } = accounts;

  return (
    <Grid container rowGap={2}>
      <h2>Canada</h2>
      {CANADA.map((acc) => {
        return <AccountListItem account={acc} key={acc.id} />;
      })}
    </Grid>
  );
}
