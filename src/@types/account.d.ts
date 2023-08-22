export interface IAccount {
  id: string;
  name: string;
  amount: number;
}

export interface IAccountList {
  [country: string]: IAccount[];
}
