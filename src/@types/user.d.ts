export interface IUser {
  name: string;
}

export interface IUserContextType {
  user: IUser | null;
  saveUser: (user: IUser) => void;
}
