import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="avatar" />
      {props.message}
      <div className={s.like}>
        <span>like {props.likeCount} </span>
        <span>dislike {props.dislikeCount}</span>
      </div>
    </div>
  );
}

export default Post;