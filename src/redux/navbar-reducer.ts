type LinkType = {
  id: number
  text: string
  link: string
}

type NavbarStateType = {
  links: Array<LinkType>
}

const initialState: NavbarStateType = {
  links: [
    { id: 1, text: "Profile", link: "/profile" },
    { id: 2, text: "Messages", link: "/dialogs" },
    { id: 3, text: "Music", link: "/music" },
    { id: 4, text: "News", link: "/news" },
    { id: 5, text: "Users", link: "/users" },
    { id: 6, text: "Settings", link: "/settings" }
  ]
}

const navbarReducer = (state = initialState, action: any): NavbarStateType => {
  switch (action.type) {

    default:
      return state;
  }
}

export default navbarReducer;