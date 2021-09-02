import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers'

const middleWare = [thunk];
const inisitialState = {};

const store = createStore(rootReducer, inisitialState, composeWithDevTools
    (applyMiddleware(...middleWare)));

export default store;