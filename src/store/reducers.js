import { combineReducers } from 'redux';
import drivers from './drivers/redusers';

const rootReducer = combineReducers({
  drivers
});

export default rootReducer;
