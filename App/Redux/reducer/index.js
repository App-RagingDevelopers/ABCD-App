import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';

export const appReducer = combineReducers({
  homeState: HomeReducer,
});
