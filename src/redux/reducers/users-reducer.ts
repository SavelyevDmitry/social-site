import { TUser } from './../../types/types';
import { UsersAPI } from "../../api/usersAPI";
import { Dispatch } from 'redux';

const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const CLEAR_USERS = 'CLEAR-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_IS_LOADING = "SET-IS-LOADING";
const TOGGLE_USER_IN_PROGRESS = 'TOGGLE-USER-IN-PROGRESS';

type UsersStateType = {
  users: Array<TUser>,
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  usersInProgress: Array<number>
}

const initialState: UsersStateType = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  usersInProgress: []
}

const usersReducer = (state = initialState, action: any): UsersStateType => {
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
          : state.usersInProgress.filter(id => id !== action.userId)
      }

    case SET_IS_LOADING:
      return {
        ...state,
        isFetching: action.isLoading
      }
    
    default:
      return state;
  }
}

type SetUsersActionType = { 
  type: typeof SET_USERS, 
  users: Array<TUser> 
}
export const setUsers = (users: Array<TUser>): SetUsersActionType => ( { type: SET_USERS, users} )

type ClearUsersActionType = { 
  type: typeof CLEAR_USERS 
}
export const clearUsers = (): ClearUsersActionType => ( { type: CLEAR_USERS } )

type FollowActionType = {
  type: typeof FOLLOW
  userId: number
}

type UnfollowActionType = {
  type: typeof UNFOLLOW
  userId: number
}

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  newCurrentPage: number
}

type SetIsLoadingActionType = {
  type: typeof SET_IS_LOADING
  isLoading: boolean
}

type ToggleUserInProgressActionType = {
  type: typeof TOGGLE_USER_IN_PROGRESS
  isLoading: boolean
  userId: number
}

export const follow = (userId: number): FollowActionType => ( { type: FOLLOW, userId } )
export const unfollow = (userId: number): UnfollowActionType => ( { type: UNFOLLOW, userId } )
export const setCurrentPage = (newCurrentPage: number): SetCurrentPageActionType => ( { type: SET_CURRENT_PAGE, newCurrentPage } )
export const setIsLoading = (isLoading: boolean): SetIsLoadingActionType => ( { type: SET_IS_LOADING, isLoading } )
export const toggleUserInProgress = (isLoading: boolean, userId: number): ToggleUserInProgressActionType => ( { type: TOGGLE_USER_IN_PROGRESS, isLoading, userId } )

export const requestUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch( setIsLoading(true) );
    UsersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        debugger
        dispatch( setIsLoading(false) );
        dispatch( setUsers(data.items) );
      })
  }
}

export const setFollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch( toggleUserInProgress(true, userId) );
  
  UsersAPI.setFollow(userId)
    .then((resultCode: number) => {
      !resultCode ? dispatch( follow(userId) ) : console.log(resultCode);
      dispatch( toggleUserInProgress(false, userId) );
    })
} 


export const setUnfollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch( toggleUserInProgress(true, userId) );

  UsersAPI.setUnfollow(userId)
    .then((resultCode: number) => {
      !resultCode ? dispatch( unfollow(userId) ) : console.log(resultCode);
      dispatch( toggleUserInProgress(false, userId) );
  })
}


export default usersReducer;