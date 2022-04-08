/* eslint-disable no-debugger */
/* eslint-disable default-param-last */
import * as types from '../Action/actionType';

const reducer = (state = '', action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
      };
    case types.ADD_USERS:
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    case types.EDIT_USER:
      return {
        ...state,
        items: state.items.map((content) => (content.id === action.payload.id
          ? {
            ...content,
            name: action.payload.name,
            department: action.payload.department,
          }
          : content)),
      };
    case types.DELETE_USERS:
      return {
        ...state,
        items: state.items.filter((element) => element.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
