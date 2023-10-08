import AccountTransactionsContainer from "@/containers/AccountTransactionContainer";
import { accounts } from "@/data/accounts";
import { Account, SupportedCountries } from "@/types/account";
import { GetStaticPaths, GetStaticProps } from "next";
import StaticPageRootLayout from "@/containers/StaticPageRootLayout";

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

export const getStaticPaths = (async () => {
  const accountIds = getAllAccountIds(); // a function that fetches account IDs
  return {
    paths: accountIds.map((id) => {
      return {
        params: { account: id },
      };
    }),
    fallback: false, // See the "fallback" section below
  };
}) satisfies GetStaticPaths;

export const getStaticProps = ((context) => {
  return { props: { params: context.params } };
}) satisfies GetStaticProps<{}>;

// This page is wrapped by the _app.tsx to receive Inter font
export default function Page({ params }: { params: { account: string } }) {
  return (
    <StaticPageRootLayout>
      <AccountTransactionsContainer account={params.account} />
    </StaticPageRootLayout>
  );
}
/* End */
