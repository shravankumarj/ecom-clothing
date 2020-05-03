import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Homepage from './pages/homepage.componet'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
