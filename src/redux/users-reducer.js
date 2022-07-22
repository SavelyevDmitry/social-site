const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const CLEAR_USERS = 'CLEAR-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1
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
    default:
      return state;
  }
}

export const setUsers= (users) => (
  { type: SET_USERS, users} 
)

export const clearUsers = () => (
  { type: CLEAR_USERS }
)

export const follow = (userId) => (
  { type: FOLLOW, userId }
)

export const unfollow = (userId) => (
  { type: UNFOLLOW, userId }
)

export const setCurrentPage = (newCurrentPage) => (
  { type: SET_CURRENT_PAGE, newCurrentPage }
)

export default usersReducer;