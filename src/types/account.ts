export type Account = {
  id: string;
  name: string;
  amount: number;
  country: string;
};

export enum SupportedCountries {
  CA = "CA",
  US = "US",
  HK = "HK",
  AU = "AU",
  NZ = "NZ",
}

export enum Currencies {
  CA = "CAD",
  US = "USD",
  HK = "HKD",
  AU = "AUD",
  NZ = "NZD",
}

export type AccountListData = {
  [country in SupportedCountries]?: Account[];
};
