import React, { useContext } from 'react';
import Wrapper from '../../components/Wrapper';
import UserCard from '../../components/UserCard';
import { Context } from '../../App'
import Preloader from '../../components/Preloader';
import './style.scss';


const Users = () => {
  const { state, isShowPreloader } = useContext(Context);  

  return (
    <Wrapper>
      {state.users.map(user => <UserCard key={user.id} user={user} />)}
      {isShowPreloader && <Preloader />}
    </Wrapper>
  );
}

export default Users;