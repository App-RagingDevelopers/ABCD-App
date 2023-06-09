import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './reducer';
const initialState = {};

const store = createStore(appReducer, initialState, applyMiddleware(thunk));

export default store;
