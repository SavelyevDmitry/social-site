import { TUser } from './../../types/types';
import { UsersAPI } from "../../api/usersAPI";
import { Dispatch } from 'redux';
import { TAppState } from '../store';
import { ThunkAction } from 'redux-thunk';

const SET_USERS = '/users/SET-USERS';
const SET_CURRENT_PAGE = '/users/SET-CURRENT-PAGE';
const CLEAR_USERS = '/users/CLEAR-USERS';
const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_IS_LOADING = '/users/SET-IS-LOADING';
const TOGGLE_USER_IN_PROGRESS = '/users/TOGGLE-USER-IN-PROGRESS';
const SET_TOTAL_USERS_COUNT = '/users/SET-TOTAL-USERS-COUNT';

type TResponseGetUsers = {
  error: string
  items: Array<TUser>
  totalCount: number
}

type TSetUsersAction = { type: typeof SET_USERS, users: Array<TUser> }
type TClearUsersAction = { type: typeof CLEAR_USERS }
type TFollowAction = {type: typeof FOLLOW, userId: number}
type TUnfollowAction = { type: typeof UNFOLLOW, userId: number}
type TSetCurrentPageAction = { type: typeof SET_CURRENT_PAGE, newCurrentPage: number}
type TSetIsLoadingAction = { type: typeof SET_IS_LOADING, isLoading: boolean}
type TToggleUserInProgressAction = { type: typeof TOGGLE_USER_IN_PROGRESS, isLoading: boolean, userId: number }
type TSetTotalUsersCount = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }

type TActions = TSetUsersAction | TClearUsersAction | TFollowAction | TUnfollowAction | TSetCurrentPageAction | TSetIsLoadingAction | TToggleUserInProgressAction | TSetTotalUsersCount

const initialState = {
  users: [] as Array<TUser>,
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  usersInProgress: [] as Array<number>
}

type UsersStateType = typeof initialState;

const usersReducer = (state = initialState, action: TActions): UsersStateType => {
  switch (action.type) {

    case SET_USERS: 
      return {
        ...state,
        users: [ ...action.users ]
      }

    case SET_TOTAL_USERS_COUNT: 
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
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

export const setUsers = (users: Array<TUser>): TSetUsersAction => ( { type: SET_USERS, users} )
export const clearUsers = (): TClearUsersAction => ( { type: CLEAR_USERS } )
export const follow = (userId: number): TFollowAction => ( { type: FOLLOW, userId } )
export const unfollow = (userId: number): TUnfollowAction => ( { type: UNFOLLOW, userId } )
export const setCurrentPage = (newCurrentPage: number): TSetCurrentPageAction => ( { type: SET_CURRENT_PAGE, newCurrentPage } )
export const setIsLoading = (isLoading: boolean): TSetIsLoadingAction => ( { type: SET_IS_LOADING, isLoading } )
export const toggleUserInProgress = (isLoading: boolean, userId: number): TToggleUserInProgressAction => ( { type: TOGGLE_USER_IN_PROGRESS, isLoading, userId } )
export const setTotalUsersCount = (totalUsersCount: number): TSetTotalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount }) 

export const requestUsers = (currentPage: number, pageSize: number): ThunkAction<void, TAppState, unknown, TActions> => (dispatch) => {
  dispatch( setIsLoading(true) );

  UsersAPI.getUsers(currentPage, pageSize)
    .then((data: TResponseGetUsers) => {
      dispatch( setIsLoading(false) );
      dispatch( setUsers(data.items) );
      dispatch( setTotalUsersCount(data.totalCount) )
    })
}

export const setFollow = (userId: number): ThunkAction<void, TAppState, unknown, TActions> => (dispatch) => {
  dispatch( toggleUserInProgress(true, userId) );

  UsersAPI.setFollow(userId)
    .then((resultCode: number) => {
      !resultCode ? dispatch( follow(userId) ) : console.log(resultCode);
      dispatch( toggleUserInProgress(false, userId) );
    })
} 

export const setUnfollow = (userId: number): ThunkAction<void, TAppState, unknown, TActions> => (dispatch) => {
  dispatch( toggleUserInProgress(true, userId) );

  UsersAPI.setUnfollow(userId)
    .then((resultCode: number) => {
      !resultCode ? dispatch( unfollow(userId) ) : console.log(resultCode);
      dispatch( toggleUserInProgress(false, userId) );
  })
}

export const changePage = (pageNumber: number, pageSize: number): ThunkAction<void, TAppState, unknown, TActions> => (dispatch) => {
  dispatch( setCurrentPage(pageNumber) ) ;
  dispatch( requestUsers(pageNumber, pageSize) );
}

export default usersReducer;