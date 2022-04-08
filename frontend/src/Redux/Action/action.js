/* eslint-disable no-console */
/* eslint-disable func-names */
import axios from 'axios';
import * as types from './actionType';

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});
const userUpdated = () => ({
  type: types.UPDATE_USER,
});
const getUser = (users) => ({
  type: types.GETSINGLE_USER,
  payload: users,
});

export const loadUsers = () => function (dispatch) {
  axios
    .get(`${process.env.REACT_APP_API}`)
    .then((response) => {
      console.log(response);
      dispatch(getUsers(response.data));
    })
    .catch((error) => console.error(error));
};

export const deleteUser = (id) => function (dispatch) {
  axios
    .delete(`${process.env.REACT_APP_API}/${id}`)
    .then((response) => {
      console.log(response);
      dispatch(userDeleted());
      dispatch(loadUsers());
    })
    .catch((error) => console.error(error));
};

export const addUserData = (user) => function (dispatch) {
  axios
    .post(`${process.env.REACT_APP_API}`, user)
    .then((response) => {
      console.log(response);
      dispatch(userAdded());
      dispatch(loadUsers());
    })
    .catch((error) => console.error(error));
};

export const getSingleUser = (id) => function (dispatch) {
  axios
    .get(`${process.env.REACT_APP_API}/${id}`)
    .then((response) => {
      console.log(response);
      dispatch(getUser(response.data));
    })
    .catch((error) => console.error(error));
};

export const updateUser = (user, id) => function (dispatch) {
  axios
    .put(`${process.env.REACT_APP_API}/${id}`, user)
    .then((response) => {
      console.log(response);
      dispatch(userUpdated());
      dispatch(loadUsers());
    })
    .catch((error) => console.error(error));
};
