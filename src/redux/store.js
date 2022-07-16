import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reduces";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer
})

const store = createStore(reducers);

export default store;