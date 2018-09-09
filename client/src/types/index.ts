export interface IUser {
  username: string;
  email: string;
  password: string;
}

export type User = IUser | null;

export interface IStoreState {
  user: User;
}