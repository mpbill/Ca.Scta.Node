/**
 * Created by mpbil on 3/14/2017.
 */
import api from 'api';
import * as types from '../constants/actionTypes';

export default {
  loadUsers: () => (dispatch) => {
    dispatch({ type: types.CONTACTS_LOADING });
    api.get('/Users/All').then(({ data }) => {
      dispatch({ type: types.CONTACTS_RECIEVED, users: data });
    });
  },
};
