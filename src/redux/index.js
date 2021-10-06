import { combineReducers } from "redux";
import hamburger from "./hamburger.js";
import auth from './auth';
import loading from './loader';
import chat from './chat'

export default combineReducers({
    hamburger, auth, loading, chat
});