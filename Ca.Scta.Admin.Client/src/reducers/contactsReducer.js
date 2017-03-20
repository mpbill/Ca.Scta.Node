/**
 * Created by mpbil on 3/14/2017.
 */

import * as types from '../constants/actionTypes';

const getDefaultState = ()=>({
  isLoading:false,
  isLoaded:false,
  contacts:undefined,

});

export default (state=getDefaultState(),action)=>{
  switch (action.type){
    case types.CONTACTS_LOADING:
      return {...state, isLoaded:true};
    case types.CONTACTS_RECIEVED:
      return {...state,contacts:action.contacts,isLoaded:true,isLoading:false};
    default:
      return state;
  }
}
