export const sessSetItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const sessGetItem = (key: string) => {
  if (typeof window !== "undefined") {
    return JSON.parse(sessionStorage.getItem(key) as string);
  }
};
