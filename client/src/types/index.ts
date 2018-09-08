export interface User {
  username: string;
  email: string;
  password: string;
}

export interface StoreState {
  user: User | null;
}