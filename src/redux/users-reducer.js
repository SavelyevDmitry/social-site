import { UsersAPI } from "../api/usersAPI";

const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const CLEAR_USERS = 'CLEAR-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_IS_LOADING = "SET-IS-LOADING";
const TOGGLE_USER_IN_PROGRESS = 'TOGGLE-USER-IN-PROGRESS';

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  usersInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USERS: 
      return {
        ...state,
        users: [ ...action.users ]
      }

    case CLEAR_USERS:
      return {
        ...state,
        users: []
      }
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.newCurrentPage
      }

    case FOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          return user.id === action.userId 
            ? { ...user, followed: true } 
            : user 
        })
      }
    
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map( user => {
          return user.id === action.userId 
            ? { ...user, followed: false } 
            : user 
        })
      }
    
    case TOGGLE_USER_IN_PROGRESS:
      return {
        ...state,
        usersInProgress: action.isLoading
          ? [...state.usersInProgress, action.userId]
          : state.usersInProgress.filter(id => id != action.userId)
      }

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    
    default:
      return state;
  }
}

export const setUsers= (users) => ( { type: SET_USERS, users} )
export const clearUsers = () => ( { type: CLEAR_USERS } )
export const follow = (userId) => ( { type: FOLLOW, userId } )
export const unfollow = (userId) => ( { type: UNFOLLOW, userId } )
export const setCurrentPage = (newCurrentPage) => ( { type: SET_CURRENT_PAGE, newCurrentPage } )
export const setIsLoading = (isLoading) => ( { type: SET_IS_LOADING, isLoading } )
export const toggleUserInProgress = (isLoading, userId) => ( { type: TOGGLE_USER_IN_PROGRESS, isLoading, userId } )

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch( setIsLoading(true) );
    UsersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch( setIsLoading(false) );
        dispatch( setUsers(data.items) );
      })
  }
}

export const setFollow = (userId) => {
  return (dispatch) => {
    dispatch( toggleUserInProgress(true, userId) );
    UsersAPI.setFollow(userId)
      .then(resultCode => {
        !resultCode ? dispatch( follow(userId) ) : console.log(resultCode);
        dispatch( toggleUserInProgress(false, userId) );
      })
  } 
}

export const setUnfollow = (userId) => {
  return (dispatch) => {
    dispatch( toggleUserInProgress(true, userId) );
    UsersAPI.setUnfollow(userId)
      .then(resultCode => {
        !resultCode ? dispatch( unfollow(userId) ) : console.log(resultCode);
        dispatch( toggleUserInProgress(false, userId) );
    })
  }
}

export default usersReducer;