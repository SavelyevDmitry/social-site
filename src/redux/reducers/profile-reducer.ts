import { Dispatch } from "redux";
import { TPost, TProfile } from "../../types/types";
import { profileAPI } from './../../api/profileAPI';
import { ThunkAction } from 'redux-thunk';
import { TAppState } from "../store";

const ADD_POST = '/profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = '/profile/UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = '/profile/SET-PROFILE-INFO';

type TAddPost = { type: typeof ADD_POST }
type TUpdateNewPostText = { type: typeof UPDATE_NEW_POST_TEXT, newText: string}
type TSetProfileInfo = { type: typeof SET_PROFILE_INFO, profile: TProfile }

type TActions = TAddPost | TUpdateNewPostText | TSetProfileInfo;

const initialState = {
  profile: {
    userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
      github: null,
      vk: null,
      facebook: null,
      instagram: null,
      twitter: null,
      website: null,
      youtube: null,
      mainLink: null
    },
    photos: {
      small: null,
      large: null
    },
    aboutMe: null
  } as TProfile,
  posts: [
    { id: 1, message: "Привет, я тут!", who: "Дмитрий Савельев", likeCounter: 5 },
    { id: 2, message: "Это мой первый проект на React", who: "Дмитрий Савельев", likeCounter: 8 },
    { id: 3, message: "Все, что случается - к лучшему", who: "Дмитрий Савельев", likeCounter: 15 },
    { id: 4, message: "Hello World!", who: "Дмитрий Савельев", likeCounter: 9 }
  ] as Array<TPost>,
  newPostText: '' as string,
}

type ProfileStateType = typeof initialState;

const profileReducer = (state = initialState, action: TActions): ProfileStateType => {
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

export const addPost = (): TAddPost => ( { type: ADD_POST } )
export const updateNewPostText = (newText: string): TUpdateNewPostText => ( { type: UPDATE_NEW_POST_TEXT, newText: newText } )
export const setProfileInfo = (profile: TProfile): TSetProfileInfo => ( { type: SET_PROFILE_INFO, profile } )

export const getUserInfo = (userId: number): ThunkAction<void, TAppState, unknown, TActions> => (dispatch) => {
  profileAPI.getUserInfo(userId)
    .then((profile: TProfile) => {
      dispatch(setProfileInfo(profile));
    });
}

export default profileReducer;