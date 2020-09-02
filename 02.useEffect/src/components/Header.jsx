import React from 'react';

const Header = ({ handleSearch }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;