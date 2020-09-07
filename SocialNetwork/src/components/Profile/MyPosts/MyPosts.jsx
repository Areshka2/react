import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log(props)

  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount} />).reverse();

  let newPostElement = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    props.addPost();     
  }

  const handlePostChange = () => {
    props.updatePostDate(newPostElement.current.value)
  }

  return (
    <div>
      <h3>My posts</h3>
      <form className={s.form_post}>
        <textarea
          ref={newPostElement}
          onChange={handlePostChange}
          value={props.newPostText}
          placeholder="add new post..."
        />
        <button type="submit" onClick={addPost}>Add post</button>
      </form>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;