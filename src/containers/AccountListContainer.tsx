"use client";

import AccountList from "@/components/AccountList/AccountList";
import { accounts as accountData } from "@/data/accounts";

export default function AccountListContainer() {
  return <AccountList accounts={accountData} />;
}
