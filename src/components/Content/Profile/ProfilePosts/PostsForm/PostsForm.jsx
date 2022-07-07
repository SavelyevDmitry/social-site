import React from "react";
import './PostsForm.css'

const PostsForm = (props) => {
  const newPostElement = React.useRef(null);

  function addPost(e) {
    e.preventDefault();
    props.addNewPost();
  }
  
  function updateNewMessageText() {
    const currentText = newPostElement.current.value;
    console.log(currentText);
    props.updateNewMessageText(currentText);
  }

  return (
    <div className="posts__form posts-form">
      <h2 className="posts__title"> { props.title } </h2>
      <form action="" onSubmit={addPost} className="posts-form__form">
        <textarea 
          name="message" 
          className="posts-form__message" 
          value = { props.newPostText } 
          ref = { newPostElement }
          onChange = { updateNewMessageText } 
        />
        <button type="submit" className="btn posts-form__btn">Submit</button>
      </form>
    </div>
  )
}

export default PostsForm;