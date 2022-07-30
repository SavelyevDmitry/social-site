import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reduces";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

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