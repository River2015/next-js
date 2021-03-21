import rootReducer from './reducer/index';
import thunk from 'redux-thunk';
import {createWrapper} from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'


const middleware = [thunk];
// const initialState = {};
const makeStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));


export const wrapper = createWrapper(makeStore);