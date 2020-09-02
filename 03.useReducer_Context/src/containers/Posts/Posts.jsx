import React, { useContext } from 'react'
import Wrapper from '../../components/Wrapper';
import PostCart from '../../components/PostCard';
import { Context } from '../../App'
import Preloader from '../../components/Preloader';

const Posts = () => {
  const { state, isShowPreloader } = useContext(Context);

  return (
    <Wrapper>
      {state.posts.map(post => <PostCart key={post.id} post={post} />)}
      {isShowPreloader && <Preloader />}
    </Wrapper>
  );
}

export default Posts;