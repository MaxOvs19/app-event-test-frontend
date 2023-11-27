import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import './home.scss';

const Home = () => {
  return (
    <div className="home-page container">
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
