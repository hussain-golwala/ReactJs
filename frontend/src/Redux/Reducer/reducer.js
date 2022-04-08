/* eslint-disable default-param-last */
import * as types from '../Action/actionType';

const initialState = {
  userdata: [],
  user: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        userdata: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case types.GETSINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
