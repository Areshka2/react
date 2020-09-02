import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api/users.service'
import Wrapper from '../../components/Wrapper';
import UserCard from '../../components/UserCard';
import Preloader from '../../components/Preloader';
import {Context} from '../../App'
import './style.scss';
import { useContext } from 'react';


const Users = () => {
  const {state, dispatch} = useContext(Context);
  const [isShowPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    getUsers()
      .then(users => {
        dispatch({
          type: "GET_USERS",
          payload: users
        });
        setShowPreloader(false)
      })
      .catch(e => console.error(e))
  }, [])
console.log("users ", 'Value = ' + state)
  return (
    <Wrapper>
      {state.users.map(user => <UserCard key={user.id} user={user} />)}
      {isShowPreloader && <Preloader />}
    </Wrapper>
  );
}

export default Users;