import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer/index";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
 
const bindMiddleware = (middleware) => {
 if (process.env.NODE_ENV !== "production") {
 return composeWithDevTools(applyMiddleware(...middleware));
 }
 
 return applyMiddleware(...middleware);
};
 
const reducer = (state, action) => {
 if (action.type === HYDRATE) {
 return {
 ...state, // use previous state
 ...action.payload, // apply delta from hydration
 };
 }
 
 return rootReducer(state, action);
};
 
const initStore = () => {
 const isServer = typeof window === "undefined";
 if (isServer) {
 return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
 }
 
 const store = createStore(reducer, bindMiddleware([thunkMiddleware]));
 
 return store;
};
 
export const wrapper = createWrapper(initStore, { debug: true });