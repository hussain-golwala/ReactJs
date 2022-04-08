import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import Reducer from './Reducer/reducerFile';
import usersReducers from './Reducer/reducer';
import axiosReducers from './Reducer/reducerAxios';

const middlewares = [reduxThunk];

const rootReducer = combineReducers({
  data: usersReducers,
  users: Reducer,
  axios: axiosReducers,
});

const Data = {
  users: {
    items: [
      { id: 1, name: 'John', department: 'ReactJs' },
      { id: 2, name: 'Doe', department: 'Flutter' },
      { id: 3, name: 'Albert', department: '.Net' },
    ],
  },
};

const store = createStore(rootReducer, Data, applyMiddleware(...middlewares));

export default store;
