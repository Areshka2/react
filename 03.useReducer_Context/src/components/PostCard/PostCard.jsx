import React from 'react';
import './style.scss';

const PostCart = ({ post }) => {
  const { title, body } = post;

  return (
    <div className="post">
      <h5 className="">
        {title || 'no name'}
      </h5>
      <p>Address: {body}</p>
    </div>
  );
}

export default PostCart;