import React, { FC } from "react";

import { TPost } from "../../../../../../types/types";

import './Post.css';

type TProps = {
  post: TPost
}

const Post: FC<TProps> = (props) => {

  return (
    <li className="posts__item post">
      <div className="post__avatar-wrap">
        <img src="https://www.visioninfosoft.com/wp-content/uploads/2016/02/Profile.jpg" alt="avatar" className="post__avatar"/>
        <p className="post__who"> { props.post.who } </p>
      </div>
      <div className="post__info">
        <p className="post__desc">
          { props.post.message }
        </p>
        <div className="post_likes">
          <span className="post__like-counter"> { props.post.likeCounter } </span>
          <button className="btn post__btn--like">Like</button>
        </div>
      </div>
    </li>
  )
}

export default Post;