import { StoreState } from '../types/index';
import { RECEIVE_USER } from '../constants/index';
import { UserAction } from '../actions/userActions';

const initialState: StoreState = {
  user: null
};

const userReducer = (state: StoreState = initialState, action: UserAction): StoreState => {
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