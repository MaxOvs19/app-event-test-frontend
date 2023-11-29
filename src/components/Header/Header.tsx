import React from 'react';

import logo from 'assets/images/logo.png';
import user from 'assets/icons/userAvatar.svg';
import basket from 'assets/icons/shoppingCart.svg';
import './header.scss';
import { Link } from 'react-router-dom';
import BaseButton from 'UI/BaseButton/BaseButton';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="@" className="header__logo" />

      <nav className="header__nav">
        <Link to={'/'}>Catalog</Link>

        <Link to={'/'}>Blogs</Link>

        <Link to={'/'}>About Us</Link>
      </nav>

      <div className="header-profile">
        <img src={user} alt="@" />
        <Link to={'/basket'}>
          <img src={basket} alt="@" />
        </Link>

        <BaseButton>Place an order</BaseButton>
      </div>
    </header>
  );
};

export default Header;
