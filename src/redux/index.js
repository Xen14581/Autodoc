import { combineReducers } from "redux";
import hamburger from "./hamburger.js";
import auth from './auth';
import loading from './loader';

export default combineReducers({
    hamburger, auth, loading
});