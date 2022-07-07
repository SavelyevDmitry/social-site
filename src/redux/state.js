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
      profile: {
        posts: [
          { id: 1, message: "Привет, я тут!", who: "Дмитрий Савельев", likeCounter: 5 },
          { id: 2, message: "Это мой первый проект на React", who: "Дмитрий Савельев", likeCounter: 8 },
          { id: 3, message: "Все, что случается - к лучшему", who: "Дмитрий Савельев", likeCounter: 15 },
          { id: 4, message: "Hello World!", who: "Дмитрий Савельев", likeCounter: 9 }
        ],
        newPostText: '',
      }
    }
  },
  getState() {
    return this._state;
  },
  _callSubscrider() {
    console.log("render page");
  },
  subscribe(observer) {
    this._callSubscrider = observer;
  },
  addNewPost() {
    this._state.content.profile.posts.push({
      id: this._state.content.profile.posts[this._state.content.profile.posts.length - 1].id + 1,
      message: this._state.content.profile.newPostText,
      who: "Дмитрий Савельев",
      likeCounter: 0
    })
    this._state.content.profile.newPostText = '';
    this._callSubscrider();
  },
  updateNewPostText(text) {
    this._state.content.profile.newPostText = text;
    this._callSubscrider();
  },
}

export default store;

