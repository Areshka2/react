import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import User from './User';
import './Users.scss';
import Preloader from '../../components/Preloader';

// const usersInitial = [
//   {
//     name: 'Vasya',
//     age: 25
//   },
//   {
//     name: 'Petya',
//     age: 30
//   },
//   {
//     name: 'Katya',
//     age: 20
//   }
// ]

const useUsers = () => {
  const [users, setUser] = useState([]);
  const [isShowPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUser(users)
      setShowPreloader(false)
    }
    getUsers();
  }, [])

  const handleSearchUser = (value) => {
    const result = users.filter(u => u.name.toLowerCase().includes(value.toLowerCase()));
    setUser(result);
  }

  const removeUser = (name) => {
    const result = users.filter(u => u.name !== name);
    setUser(result);
  }

  return {users, isShowPreloader, handleSearchUser, removeUser}
}

const Users = () => {
  const {users, isShowPreloader, handleSearchUser, removeUser} = useUsers();

  return (
    <>
      <Header handleSearch={handleSearchUser} />
      <main>
        {users.map((u, i) => <User key={'usercard' + i} user={u} removeUser={removeUser} />)}
      </main>
      {isShowPreloader && <Preloader />}
    </>
  );
}

export default Users;