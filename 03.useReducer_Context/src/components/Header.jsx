import React, { useContext } from 'react'
import Link from './Link';
import { Context } from '../App';

const Header = ({ changePage }) => {
  const { state, dispatch } = useContext(Context);

  const handleChangeTheme = () => {
    dispatch({
      type: 'CHANGE_THEME',
    })
  }

  return (
    <header>
      <Link path='/users' onClick={() => changePage('/users')}>Users</Link>
      <Link path='/posts' onClick={() => changePage('/posts')}>Posts</Link>
      <div>
        <button onClick={handleChangeTheme}>
          {
            state.theme.type === 'light' ? 'dark' : 'light'
          }
        </button>
      </div>
    </header>
  );
}

export default Header