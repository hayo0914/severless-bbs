import { combineReducers } from 'redux';
import firebaseReducer from './FirebaseReducer';

export default combineReducers({
  firebase: firebaseReducer,
});
