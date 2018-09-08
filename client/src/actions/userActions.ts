import * as constants from '../constants/index';
import { User } from '../types/index';

interface FetchUser {
  type: constants.FETCH_USER;
};

export const fetchUser = (): FetchUser => ({
  type: constants.FETCH_USER
});

interface ReceiveUser {
  type: constants.RECEIVE_USER;
  user: any;
};

export const receiveUser = (user: User): ReceiveUser => ({
  type: constants.RECEIVE_USER,
  user
});

export type UserAction = FetchUser | ReceiveUser;