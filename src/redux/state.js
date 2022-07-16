import dialogsReducer from "./dialogs-reduces";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _state: {
    navbar: {
      links: [
        { id: 1, text: "Profile", link: "/profile" },
        { id: 2, text: "Messages", link: "/dialogs" },
        { id: 3, text: "Music", link: "/music" },
        { id: 4, text: "News", link: "/news" },
        { id: 5, text: "Settings", link: "/settings" }
      ]
    },
    content: {
      profilePage: {
        posts: [
          { id: 1, message: "Привет, я тут!", who: "Дмитрий Савельев", likeCounter: 5 },
          { id: 2, message: "Это мой первый проект на React", who: "Дмитрий Савельев", likeCounter: 8 },
          { id: 3, message: "Все, что случается - к лучшему", who: "Дмитрий Савельев", likeCounter: 15 },
          { id: 4, message: "Hello World!", who: "Дмитрий Савельев", likeCounter: 9 }
        ],
        newPostText: '',
      },
      dialogsPage: {
        dialogs: [
          { id: 1, personName: "Dmitry Ivanov" },
          { id: 2, personName: "Marina Petrova" },
          { id: 3, personName: "Ivan Dmitriev" },
          { id: 4, personName: "Kirill Akimov" },
          { id: 5, personName: "Sergey Novikov" },
        ],
        messages: [
          { id: 1, body: "Hi!" },
          { id: 2, body: "How are you?" },
          { id: 3, body: "I'm Fine!" },
          { id: 4, body: "Thank you" },
        ],
        newMessageText: '',  
      }
    }
  },
  _callSubscrider() {
    console.log("render page");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscrider = observer;
  },

  dispatch(action) {

    this._state.navbar = navbarReducer(this._state.navbar, action);
    this._state.content.profilePage = profileReducer(this._state.content.profilePage, action);
    this._state.content.dialogsPage = dialogsReducer(this._state.content.dialogsPage, action);

    this._callSubscrider();
  }
}

export default store;

