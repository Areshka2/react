import axios from 'axios';

export const getUsersFetch = async () => {
  const { data } = await axios.get('https://goit-store.herokuapp.com/users')
  return data;
}