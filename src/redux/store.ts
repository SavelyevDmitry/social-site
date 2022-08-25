import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./reducers/app-reducer";

import authReducer from './reducers/auth-reducer';
import dialogsReducer from "./reducers/dialogs-reduces";
import navbarReducer from "./reducers/navbar-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})

type TReducer = typeof reducers;
export type TAppState = ReturnType<TReducer>;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;