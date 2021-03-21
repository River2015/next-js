import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import modalReducer from "./modalReducer";


const rootReducer = combineReducers({
    moviesReducer,
    modalReducer,
});
export default rootReducer;