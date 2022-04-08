import * as types from './actionType';

export function getUsers() {
  return (dispatch) => dispatch({
    type: types.GET_USER,
  });
}

export function addUsers(data) {
  return (dispatch) => dispatch({
    type: types.ADD_USERS,
    payload: data,
  });
}

export function editUsers(data) {
  return (dispatch) => dispatch({
    type: types.EDIT_USER,
    payload: data,
  });
}

export function deleteUsers(Id) {
  return (dispatch) => dispatch({
    type: types.DELETE_USERS,
    payload: Id,
  });
}
