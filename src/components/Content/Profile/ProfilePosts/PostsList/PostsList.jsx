import React from "react";
import Post from "./Post/Post";
import './PostsList.css'

const PostsList = (props) => {
  const postElements = props.posts.map( post => <Post key={post.id} post={post}/>)

  return (
    <ul className="posts__list">
      { postElements }
    </ul>
  )
}

export default PostsList;