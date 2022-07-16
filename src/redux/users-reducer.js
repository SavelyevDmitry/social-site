const SET_USERS = 'SET-USERS';

const initialState = {
  users: [
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USERS: 
      return {
        ...state,
        users: [ ...state.users, ...action.users ]
      }

    default:
      return state;
  }
}

export const setUsersActionCreator = (users) => (
  { type: SET_USERS, users} 
)

export default usersReducer;