import React, { useState, useEffect } from 'react'
import { getPosts } from '../../api/posts.service'
import Wrapper from '../../components/Wrapper';
import PostCart from '../../components/PostCard';
import Preloader from '../../components/Preloader';

const Posts = (props) => {
  const [postsData, setPostsData] = useState([]);
  const [isShowPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    getPosts()
      .then(posts => {
        setPostsData(posts)
        setShowPreloader(false)
      })
      .catch(e => console.error(e))
  }, [])


  return (
    <Wrapper>
      {postsData.map(post => <PostCart key={post.id} post={post} />)}
      {isShowPreloader && <Preloader />}
    </Wrapper>
  );
}

export default Posts;