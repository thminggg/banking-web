"use client";

import { AccountListData } from "@/types/account";
import AccountList from "@/components/AccountList/AccountList";
import { useState } from "react";
import { accounts as accountData } from "@/data/accounts";

export default function AccountListContainer() {
  // TODO: fetch from backend API
  const [accounts, setAccounts] = useState<AccountListData>();

  return <AccountList accounts={accountData} />;
}
