import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer.ts";
import dialogsReducer from "./dialogs-reduces.ts";
import navbarReducer from "./navbar-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import usersReducer from "./users-reducer.ts";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;