import AccountTransactionsContainer from "@/containers/AccountTransactionContainer";
import { accounts } from "@/data/accounts";
import { Account, SupportedCountries } from "@/types/account";

/* Special handling for static page hosting, i.e. Github Page */
const getAllAccountIds = () => {
  const allAccountIds = [];
  for (const country in accounts) {
    const countryAccounts = accounts[
      country as SupportedCountries
    ] as Account[];
    allAccountIds.push(...countryAccounts.map((acc) => `${country}_${acc.id}`));
  }
  return allAccountIds;
};

export function getStaticPaths() {
  const accountIds = getAllAccountIds(); // a function that fetches account IDs
  return {
    paths: accountIds.map((id) => {
      return {
        params: { account: id },
      };
    }),
    fallback: false, // See the "fallback" section below
  };
}
/* End */

export default function AccountTransactions({
  params,
}: {
  params: { account: string };
}) {
  return <AccountTransactionsContainer account={params.account} />;
}
