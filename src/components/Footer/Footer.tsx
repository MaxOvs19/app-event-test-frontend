import React from 'react';

import git from 'assets/icons/git.svg';
import telega from 'assets/icons/telegram.svg';
import gmail from 'assets/icons/gmail.svg';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p>© 2023 - Все права защищены</p>
      </div>
      <div className="footer__contacts">
        <a href={'https://github.com/MaxOvs19'}>
          <img src={git} alt="@" />
        </a>
        <a href="https://web.telegram.org/">
          <img src={telega} alt="@" />
        </a>
        <a href="https://mail.google.com">
          <img src={gmail} alt="@" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
