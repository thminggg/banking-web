import { Currencies, SupportedCountries } from "@/types/account";

/**
 * Format a number into a currency as per a locale
 * @param country
 * @param amount
 * @returns {string}
 */
export const formatCurrency = (country: SupportedCountries, amount: number) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: Currencies[country],
  }).format(amount);
};

/**
 * Format an epoch into a date string
 * @param country
 * @param date
 * @returns {string}
 */
export const formatDate = (country: SupportedCountries, date: number) => {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeZone: "America/Vancouver",
  }).format(date);
};

/**
 * Return a value within a range
 * @param value
 * @param min
 * @param max
 * @returns {number}
 */
export const clamp = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value));
};
