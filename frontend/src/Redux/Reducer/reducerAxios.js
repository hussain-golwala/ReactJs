/* eslint-disable default-param-last */
import * as types from '../Action/actionType';

const initialState = {
  user: [],
  users: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PERSON:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.DELETE_PERSON:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_PERSON:
      return {
        ...state,
        loading: false,
      };
    case types.GETSINGLE_PERSON:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.UPDATE_PERSON:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
