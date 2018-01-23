import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';

const rootReducer = combineReducers({
  auth: AuthReducer
});

export default rootReducer;
