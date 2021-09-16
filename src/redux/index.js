import { combineReducers } from "redux";
import hamburger from "./hamburger.js";
import auth from './auth'

export default combineReducers({
    hamburger, auth
});