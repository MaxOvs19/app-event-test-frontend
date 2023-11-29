import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Shop from 'modules/Catalog/components/Shop/Shop';

import './home.scss';

const Home = () => {
  return (
    <div className="home-page container">
      <Header />
      <Shop />
      <Footer />
    </div>
  );
};

export default Home;
