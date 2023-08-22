"use client";

import { IAccountList } from "@/@types/account";
import AccountList from "@/components/AccountList";
import { useState } from "react";

export default function AccountListContainer() {
  const [accounts, setAccounts] = useState<IAccountList>({
    CANADA: [
      { id: "883-677522-001", name: "Chequing Account", amount: 10000 },
      { id: "883-677522-833", name: "Saving Account", amount: 200000 },
      { id: "883-211866-221", name: "Joint Account", amount: 600000 },
    ],
  });

  return <AccountList accounts={accounts} />;
}
