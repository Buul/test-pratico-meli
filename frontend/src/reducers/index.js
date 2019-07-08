import { combineReducers } from 'redux';
import busyCounterReducer from './busyCounterReducer';
import dialogReducer from './dialogReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
  busyCounterReducer,
  dialogReducer,
  categoriesReducer,
});

export default rootReducer;
