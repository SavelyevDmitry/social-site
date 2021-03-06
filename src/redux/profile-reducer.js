const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: 1, message: "Привет, я тут!", who: "Дмитрий Савельев", likeCounter: 5 },
    { id: 2, message: "Это мой первый проект на React", who: "Дмитрий Савельев", likeCounter: 8 },
    { id: 3, message: "Все, что случается - к лучшему", who: "Дмитрий Савельев", likeCounter: 15 },
    { id: 4, message: "Hello World!", who: "Дмитрий Савельев", likeCounter: 9 }
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
}

export const addPostActionCreator = () => (
  { type: ADD_POST } 
)

export const updateNewPostTextActionCreator = (newText) => (
  { type: UPDATE_NEW_POST_TEXT, newText: newText }
)

export default profileReducer;