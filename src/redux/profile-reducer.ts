const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';

type ProfileType = {
  fullName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  aboutMe: string | null
}

type PostType = {
  id: number
  message: string
  who: string
  likeCounter: number
}

type ProfileStateType = {
  profile: ProfileType
  posts: Array<PostType>
  newPostText: string
}

const initialState: ProfileStateType = {
  profile: {
    fullName: null,
    photos: {
      small: null,
      large: null
    },
    aboutMe: null
  },
  posts: [
    { id: 1, message: "Привет, я тут!", who: "Дмитрий Савельев", likeCounter: 5 },
    { id: 2, message: "Это мой первый проект на React", who: "Дмитрий Савельев", likeCounter: 8 },
    { id: 3, message: "Все, что случается - к лучшему", who: "Дмитрий Савельев", likeCounter: 15 },
    { id: 4, message: "Hello World!", who: "Дмитрий Савельев", likeCounter: 9 }
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action: any): ProfileStateType => {
  switch (action.type) {

    // Добавление нового поста в Profile
    case ADD_POST:
      const newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.newPostText,
        who: "Дмитрий Савельев",
        likeCounter: 0
      }

      return {
        ...state,
        posts: [ ...state.posts, newPost ],
        newPostText: ''
      };

    // Обновление текста в textarea в Profile
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    
      case SET_PROFILE_INFO:
        return {
          ...state,
          profile: { ...action.profile }
        }

    default:
      return state;
  }
}

type AddPostActionType = {
  type: typeof ADD_POST
}

type UpdateNewPostTextActionType = {
  type: typeof UPDATE_NEW_POST_TEXT, 
  newText: string
}

type SetProfileInfoActionType = {
  type: typeof SET_PROFILE_INFO, 
  profile: ProfileType
}

export const addPostActionCreator = (): AddPostActionType => ( { type: ADD_POST } )
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ( { type: UPDATE_NEW_POST_TEXT, newText: newText } )
export const setProfileInfo = (profile: ProfileType): SetProfileInfoActionType => ( { type: SET_PROFILE_INFO, profile } )

export default profileReducer;