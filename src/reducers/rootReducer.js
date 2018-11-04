import { combineReducers } from 'redux';
import userReducer from './userReducer';


const rootReducer = combineReducers({
// dummy object for reducer
  user: userReducer,
});

export default rootReducer;
