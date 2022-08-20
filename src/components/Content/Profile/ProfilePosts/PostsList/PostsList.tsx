import React, { FC } from "react";
import { TPost } from "../../../../../types/types";
import Post from "./Post/Post";
import './PostsList.css'

type TProps = {
  posts: Array<TPost>
}

const PostsList: FC<TProps> = (props) => {
  const postElements = props.posts.map( post => <Post key={post.id} post={post}/>)

  return (
    <ul className="posts__list">
      { postElements }
    </ul>
  )
}

export default PostsList;