import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

import appReducer from "./reducers/app-reducer";
import authReducer from './reducers/auth-reducer';
import dialogsReducer from "./reducers/dialogs-reduces";
import navbarReducer from "./reducers/navbar-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
  },
  middleware: [ thunkMiddleware ]
})

export type TAppState = ReturnType<typeof store.getState>;

// @ts-ignore
window.store = store;

export default store;