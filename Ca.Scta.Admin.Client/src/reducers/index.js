// Set up your root reducer here...
 import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import contactsReducer from './contactsReducer';
const rootReducer = combineReducers({
  routing:routerReducer,
  contactData:contactsReducer
});
export default rootReducer;
