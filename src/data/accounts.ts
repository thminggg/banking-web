import { AccountListData } from "@/types/account";

/* Mock account data */
export const accounts: AccountListData = {
  CA: [
    {
      id: "883-677522-001",
      name: "Chequing Account",
      amount: 10000.21,
      country: "CA",
    },
    {
      id: "883-677522-833",
      name: "Saving Account",
      amount: 200000.88,
      country: "CA",
    },
    {
      id: "883-211866-221",
      name: "Joint Account",
      amount: 600000,
      country: "CA",
    },
  ],
  US: [
    {
      id: "331-237502-001",
      name: "USD Chequing Account",
      amount: 8734.21,
      country: "US",
    },
    {
      id: "331-237502-833",
      name: "USD Saving Account",
      amount: 100.34,
      country: "US",
    },
  ],
  HK: [
    {
      id: "888-636682-001",
      name: "HKD Chequing Account",
      amount: 80070.99,
      country: "HK",
    },
    {
      id: "888-636682-833",
      name: "HKD Saving Account",
      amount: 21230.88,
      country: "HK",
    },
  ],
};
