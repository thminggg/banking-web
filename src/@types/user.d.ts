export interface IUser {
  name: string;
}

export type UserContextType = {
  user: IUser | null;
  saveUser: (user: IUser) => void;
};
