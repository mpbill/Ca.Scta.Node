/**
 * Created by mpbil on 3/14/2017.
 */
import api from 'api';
import * as types from '../constants/actionTypes';

export default {
  loadUsers: () => (dispatch) => {
    dispatch({ type: types.USERS_LOADING });
    api.get('/Users/All').then(({ data }) => {
      dispatch({ type: types.USERS_RECEIVE, users: data });
    });
  },
  loadCurrentUser: () => (dispatch) => {
    dispatch({ type: types.CURRENT_USER_LOADING });
    api.get('/Users/Current').then(({ data }) => {
      dispatch({ type: types.CURRENT_USER_RECEIVE, user: data });
    });
  },
};
