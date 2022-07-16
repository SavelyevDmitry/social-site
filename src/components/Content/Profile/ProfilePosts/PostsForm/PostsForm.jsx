import React from "react";

import './PostsForm.css'

const PostsForm = (props) => {
  function addPost(e) {
    e.preventDefault();

    props.addPost();
  }
  
  function updateNewMessageText(e) {
    const newText = e.target.value;

    props.updateNewMessageText(newText);
  }

  return (
    <div className="posts__form posts-form">
      <h2 className="posts__title"> { props.title } </h2>
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