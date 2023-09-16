import { Currencies, SupportedCountries } from "@/types/account";

export const formatCurrency = (country: SupportedCountries, amount: number) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: Currencies[country],
  }).format(amount);
};

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value));
};
