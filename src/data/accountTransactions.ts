import { SupportedCountries } from "@/types/account";
import { AccountTransactionData } from "@/types/accountTransaction";

/* Mock account data */
export const accountTransactions: AccountTransactionData = {
  "883-677522-001": [
    {
      id: "randomId-1234",
      date: "2023-09-25",
      summary: "Walmart N80911422381",
      amount: 61.25,
      country: SupportedCountries.CA,
    },
    {
      id: "randomId-2234",
      date: "2023-09-21",
      summary: "Walmart N80911422381",
      amount: 30.19,
      country: SupportedCountries.CA,
    },
    {
      id: "randomId-3234",
      date: "2023-09-15",
      summary: "Walmart N80911422381",
      amount: 20.15,
      country: SupportedCountries.CA,
    },
  ],
};
