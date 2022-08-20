import { TUser } from './../../types/types';
import { TAppState } from './../store';

export const getUsers = (state: TAppState): Array<TUser> => {
  return state.usersPage.users;
} 

export const getPageSize = (state: TAppState): number => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: TAppState): number => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: TAppState): number => {
  return state.usersPage.currentPage;
}

export const getUsersInProgress = (state: TAppState): Array<number> => {
  return state.usersPage.usersInProgress;
}

export const getIsFetching = (state: TAppState): boolean => {
  return state.usersPage.isFetching;
}

