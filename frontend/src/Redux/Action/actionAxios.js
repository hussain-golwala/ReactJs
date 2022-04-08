/* eslint-disable func-names */
/* eslint-disable no-console */
import axios from 'axios';
import * as types from './actionType';

const getUsers = (user) => ({
  type: types.GET_PERSON,
  payload: user,
});
const userDeleted = () => ({
  type: types.DELETE_PERSON,
});

const userAdded = () => ({
  type: types.ADD_PERSON,
});
const userUpdated = () => ({
  type: types.UPDATE_PERSON,
});
// const getUser = (user) => ({
//   type: types.GETSINGLE_PERSON,
//   payload: user,
// });

export const loadUsers = () => function (dispatch) {
  axios
    .get(`${process.env.REACT_APP_API_MONGO}`)
    .then((response) => {
      const { data } = response.data;
      dispatch(getUsers(data));
    })
    .catch((error) => console.error(error));
};

export const deleteUser = (id) => function (dispatch) {
  axios
    .delete(`${process.env.REACT_APP_API_MONGO}/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch(userDeleted());
      dispatch(loadUsers());
    })
    .catch((error) => console.error(error));
};

export const addUserData = (users) => function (dispatch) {
  axios
    .post(`${process.env.REACT_APP_API_MONGO}/`, users)
    .then((response) => {
      const { data } = response.data;
      console.log('response', data);
      dispatch(userAdded());
      dispatch(loadUsers());
    })
    .catch((error) => console.error(error));
};

// export const getSingleUser = (id) => function (dispatch) {
//   axios
//     .get(`${process.env.REACT_APP_API_MONGO}/${id}`)
//     .then((response) => {
//       // const { data } = response.data;
//       console.log('response', response);
//       dispatch(getUser());
//     })
//     .catch((error) => console.error(error));
// };

export const updateUser = (user, id) => function (dispatch) {
  axios
    .patch(`${process.env.REACT_APP_API_MONGO}/${id}`, user)
    .then((response) => {
      const { data } = response.data;
      console.log(data);
      dispatch(userUpdated());
      dispatch(loadUsers());
    })
    .catch((error) => console.error(error));
};
