import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contacts'>
          CONTACTS
        </Link>
        <Link className='option' to='/login'>
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
