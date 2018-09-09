import * as constants from '../constants';
import { User } from '../types';

interface IFetchUser {
  type: constants.FETCH_USER;
};

export const fetchUser = (): IFetchUser => ({
  type: constants.FETCH_USER
});

interface IReceiveUser {
  type: constants.RECEIVE_USER;
  user: any;
};

export const receiveUser = (user: User): IReceiveUser => ({
  type: constants.RECEIVE_USER,
  user
});

export type UserAction = IFetchUser | IReceiveUser;