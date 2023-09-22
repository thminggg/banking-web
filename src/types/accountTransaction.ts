import { SupportedCountries } from "./account";

export type AccountTransaction = {
  id: string;
  date: number;
  summary: string;
  amount: number;
  country: SupportedCountries;
};

export type AccountTransactionData = {
  [key in string]: AccountTransaction[];
};
