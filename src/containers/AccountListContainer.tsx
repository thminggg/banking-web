"use client";

import { AccountListData } from "@/types/account";
import AccountList from "@/components/AccountList/AccountList";
import { useState } from "react";
import { accounts as accountData } from "@/data/accounts";

export default function AccountListContainer() {
  return <AccountList accounts={accountData} />;
}
