export interface IStoreState {
  user: User;
};

export interface IUser {
  username: string;
  email: string;
  password: string;
  diary: IPage[];
};

export type User = IUser | null;

export interface IPage {
  user: string;
  data: string;
  text: string;
  isPublic: boolean;
};

export type Diary = IPage[];