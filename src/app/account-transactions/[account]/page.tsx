import AccountTransactionsContainer from "@/containers/AccountTransactionContainer";

export default function AccountTransactions({
  params,
}: {
  params: { account: string };
}) {
  return <AccountTransactionsContainer account={params.account} />;
}
