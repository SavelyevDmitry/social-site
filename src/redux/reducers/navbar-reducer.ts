import { TLink } from '../../types/types'

const initialState = {
  links: [
    { id: 1, text: "Profile", link: "/profile" },
    { id: 2, text: "Messages", link: "/dialogs" },
    { id: 3, text: "Music", link: "/music" },
    { id: 4, text: "News", link: "/news" },
    { id: 5, text: "Users", link: "/users" },
    { id: 6, text: "Settings", link: "/settings" }
  ] as Array<TLink>
}

type NavbarStateType = typeof initialState;

const navbarReducer = (state = initialState, action: any): NavbarStateType => {
  switch (action.type) {

    default:
      return state;
  }
}

export default navbarReducer;