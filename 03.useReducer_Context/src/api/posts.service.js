import axios from './axios.instence';

export const getPosts = async () => {
  const { data } = await axios.get('/posts')
  return data;
}