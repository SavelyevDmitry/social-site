import React, { ChangeEvent, FC, FormEvent } from "react";

import './PostsForm.css'

type TProps = {
  newPostText: string

  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const PostsForm: FC<TProps> = (props) => {
  function addPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    props.addPost();
  }
  
  function updateNewMessageText(e: ChangeEvent<HTMLTextAreaElement>) {
    const newText = e.target.value;

    props.updateNewPostText(newText);
  }

  return (
    <div className="posts__form posts-form">
      <h2 className="posts__title"> { "Posts" } </h2>
      <form action="" onSubmit={addPost} className="posts-form__form">
        <textarea 
          name="message" 
          className="form-text-input posts-form__message" 
          value = { props.newPostText } 
          onChange = { updateNewMessageText } 
        />
        <button type="submit" className="btn posts-form__btn">Submit</button>
      </form>
    </div>
  )
}

export default PostsForm;