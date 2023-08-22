export type User = {
  name: string;
};

export type UserContextType = {
  user: User | null;
  saveUser: (user: User) => void;
};
