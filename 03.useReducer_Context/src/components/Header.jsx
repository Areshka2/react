import React from 'react'
import Link from './Link'

const Header = ({ changePage }) => {
  return (
    <header>
      <Link path='/users' onClick={() => changePage('/users')}>Users</Link>
      <Link path='/posts' onClick={() => changePage('/posts')}>Posts</Link>
    </header>
  );
}

export default Header