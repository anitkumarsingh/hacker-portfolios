import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolios';
import Favourites from '../pages/Favourites';
import Header from '../components/Block/Header';
import Footer from '../components/Block/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
