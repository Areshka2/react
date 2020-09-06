import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.state.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount} />).reverse();

  let newPostElement = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    props.addPost(newPostElement.current.value);
    newPostElement.current.parentNode.reset();
  }

  return (
    <div>
      <h3>My posts</h3>
      <form className={s.form_post}>
        <textarea ref={newPostElement} placeholder="add new post..."></textarea>
        <button type="submit" onClick={addPost}>Add post</button>
      </form>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;