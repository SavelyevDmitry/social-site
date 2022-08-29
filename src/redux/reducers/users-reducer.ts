import { TUser } from './../../types/types';
import { UsersAPI } from "../../api/usersAPI";
import { Dispatch } from 'redux';
import { TAppState } from '../store';

const SET_USERS = '/users/SET-USERS';
const SET_CURRENT_PAGE = '/users/SET-CURRENT-PAGE';
const CLEAR_USERS = '/users/CLEAR-USERS';
const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_IS_LOADING = '/users/SET-IS-LOADING';
const TOGGLE_USER_IN_PROGRESS = '/users/TOGGLE-USER-IN-PROGRESS';
const SET_TOTAL_USERS_COUNT = '/users/SET-TOTAL-USERS-COUNT';

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

type TSetUsersAction = { type: typeof SET_USERS, users: Array<TUser> }
export const setUsers = (users: Array<TUser>): TSetUsersAction => ( { type: SET_USERS, users} )

type TClearUsersAction = { type: typeof CLEAR_USERS }
export const clearUsers = (): TClearUsersAction => ( { type: CLEAR_USERS } )

type TFollowAction = {type: typeof FOLLOW, userId: number}
export const follow = (userId: number): TFollowAction => ( { type: FOLLOW, userId } )

type TUnfollowAction = { type: typeof UNFOLLOW, userId: number}
export const unfollow = (userId: number): TUnfollowAction => ( { type: UNFOLLOW, userId } )

type TSetCurrentPageAction = { type: typeof SET_CURRENT_PAGE, newCurrentPage: number}
export const setCurrentPage = (newCurrentPage: number): TSetCurrentPageAction => ( { type: SET_CURRENT_PAGE, newCurrentPage } )

type TSetIsLoadingAction = { type: typeof SET_IS_LOADING, isLoading: boolean}
export const setIsLoading = (isLoading: boolean): TSetIsLoadingAction => ( { type: SET_IS_LOADING, isLoading } )

type TToggleUserInProgressAction = { type: typeof TOGGLE_USER_IN_PROGRESS, isLoading: boolean, userId: number }
export const toggleUserInProgress = (isLoading: boolean, userId: number): TToggleUserInProgressAction => ( { type: TOGGLE_USER_IN_PROGRESS, isLoading, userId } )

type TSetTotalUsersCount = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }
export const setTotalUsersCount = (totalUsersCount: number): TSetTotalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount }) 

export const requestUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch( setIsLoading(true) );

  UsersAPI.getUsers(currentPage, pageSize)
    .then((data: any) => {
      dispatch( setIsLoading(false) );
      dispatch( setUsers(data.items) );
      dispatch( setTotalUsersCount(data.totalCount) )
    })
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

export const changePage = (pageNumber: number, pageSize: number) => (dispatch: Dispatch, getState: () => TAppState) => {
  dispatch( setCurrentPage(pageNumber) ) ;
  dispatch( requestUsers(pageNumber, pageSize) as any );
}

export default usersReducer;