"use client";

import AccountTransaction from "@/components/AccountTransaction/AccountTransaction";
import { accounts } from "@/data/accounts";
import { Account, SupportedCountries } from "@/types/account";
import { useEffect, useState } from "react";

export default function AccountTransactionsContainer({
  account,
}: {
  account: string;
}) {
  const [accountData, setAccountData] = useState<Account>();

  useEffect(() => {
    const [country, id] = account.split("_") as [SupportedCountries, string];
    const _accountData = accounts?.[country]?.find((acc) => acc.id === id);
    if (_accountData) setAccountData(_accountData);
  }, [account]);

  return accountData && <AccountTransaction account={accountData} />;
}
