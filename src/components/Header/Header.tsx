import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getShoppingСartItems } from 'modules/ShoppingСart/store/shoppingСartSlise';
import { IProduct } from 'interfaces/IProduct.interface';

import logo from 'assets/images/logo.png';
import user from 'assets/icons/userAvatar.svg';
import basketIcon from 'assets/icons/shoppingCart.svg';
import burgerMenu from 'assets/icons/burger-menu.svg';

import './header.scss';

const Header = () => {
  const basket: Array<IProduct> = useSelector(getShoppingСartItems);
  const [basketArr, setBasketArr] = useState(basket);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    setBasketArr(basket);
  }, [basket]);

  return (
    <header className="header">
      <img src={logo} alt="@" className="header__logo" />

      <nav className={menuState ? 'header__nav menu-active' : 'header__nav'}>
        <Link
          to={'/'}
          onClick={() => {
            setMenuState(false);
          }}
        >
          Catalog
        </Link>

        <Link
          to={'/'}
          onClick={() => {
            setMenuState(false);
          }}
        >
          Blogs
        </Link>

        <Link
          to={'/'}
          onClick={() => {
            setMenuState(false);
          }}
        >
          About Us
        </Link>

        <p
          className="menu-close"
          onClick={() => {
            setMenuState(false);
          }}
        >
          X
        </p>
      </nav>

      <div className="header-profile">
        <img src={user} alt="@" />
        <Link to={'/basket'} className="header-profile__basket">
          <img src={basketIcon} alt="@" />
          {basketArr.length > 0 ? (
            <span className="header-profile__basket_counter">{basketArr.length}</span>
          ) : (
            ''
          )}
        </Link>

        <img
          src={burgerMenu}
          alt="@"
          className="header-profile__menu"
          onClick={() => {
            setMenuState(true);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
