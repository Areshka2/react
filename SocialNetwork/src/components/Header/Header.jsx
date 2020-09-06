import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <a href="#s">
        <img src="https://www.freelogodesign.org/Content/img/logo-samples/sophia.png" alt="logo" />
      </a>
    </header>
  );
}

export default Header;