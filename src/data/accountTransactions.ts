import { SupportedCountries } from "@/types/account";
import { AccountTransactionData } from "@/types/accountTransaction";

/* Mock account data */
export const accountTransactions: AccountTransactionData = {
  "883-677522-001": [
    {
      id: "randomId-1234",
      date: 1695364679000,
      summary: "Walmart N80911422381",
      amount: 61.25,
      country: SupportedCountries.CA,
    },
    {
      id: "randomId-2234",
      date: 1694486051000,
      summary: "Save On Food N77213321232",
      amount: 30.19,
      country: SupportedCountries.CA,
    },
    {
      id: "randomId-3234",
      date: 1690869719000,
      summary: "Walmart N80911422381",
      amount: 20.15,
      country: SupportedCountries.CA,
    },
    {
      id: "randomId-4234",
      date: 1690595129000,
      summary: "Abi Tan N20584639671",
      amount: 61.25,
      country: SupportedCountries.CA,
    },
    {
      id: "randomId-5234",
      date: 1690510295000,
      summary: "Pizza Pizza N86038275921",
      amount: 30.19,
      country: SupportedCountries.CA,
    },
    {
      id: "randomId-6234",
      date: 1690428176000,
      summary: "Walmart N80911422381",
      amount: 20.15,
      country: SupportedCountries.CA,
    },
  ],
};
