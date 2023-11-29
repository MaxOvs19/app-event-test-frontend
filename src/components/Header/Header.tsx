import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getShoppingСartItems } from 'modules/ShoppingСart/store/shoppingСartSlise';
import { IProduct } from 'interfaces/IProduct.interface';

import logo from 'assets/images/logo.png';
import user from 'assets/icons/userAvatar.svg';
import basketIcon from 'assets/icons/shoppingCart.svg';

import './header.scss';

const Header = () => {
  const basket: Array<IProduct> = useSelector(getShoppingСartItems);
  const [basketArr, setBasketArr] = useState(basket);

  useEffect(() => {
    setBasketArr(basket);
  }, [basket]);

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
        <Link to={'/basket'} className="header-profile__basket">
          <img src={basketIcon} alt="@" />
          {basketArr.length > 0 ? (
            <span className="header-profile__basket_counter">{basketArr.length}</span>
          ) : (
            ''
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
