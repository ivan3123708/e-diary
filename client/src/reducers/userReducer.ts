import { IStoreState } from '../types';
import { RECEIVE_USER } from '../constants';
import { UserAction } from '../actions/userActions';

const initialState: IStoreState = {
  user: null
};

const userReducer = (state: IStoreState = initialState, action: UserAction): IStoreState => {
  switch(action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
};

export default userReducer;