const SET_USERS = 'SET-USERS';
const CLEAR_USERS = 'CLEAR-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 102
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USERS: 
    console.log(action.users);
      return {
        ...state,
        users: [ ...state.users, ...action.users ]
      }

    case CLEAR_USERS:
      return {
        ...state,
        users: []
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

export const setUsersActionCreator = (users) => (
  { type: SET_USERS, users} 
)

export const clearUsersActionCreator = () => (
  { type: CLEAR_USERS }
)

export const followActionCreator = (userId) => (
  { type: FOLLOW, userId }
)

export const unfollowActionCreator = (userId) => (
  { type: UNFOLLOW, userId }
)

export default usersReducer;