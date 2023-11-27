import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Catalog from 'modules/Catalog/components/Catalog/Catalog';

import './home.scss';

const Home = () => {
  return (
    <div className="home-page container">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};

export default Home;
