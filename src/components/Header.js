import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className='center'>
      <a
        href='https://www.amc.com/shows/breaking-bad--18'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={logo} alt='Logo' />
      </a>
    </header>
  );
};

export default Header;
