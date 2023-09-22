import { SupportedCountries } from "./account";

export type AccountTransactionData = {
  [key in string]: {
    id: string;
    date: string;
    summary: string;
    amount: number;
    country: SupportedCountries;
  }[];
};
