import React, { Component } from 'react';
import TopMenu from './HeaderTop/TopMenu';
import Logo from './MainHeader/Logo';
import Search from './MainHeader/Search';
import Cart from './MainHeader/Cart';
import Navbar from './Navbar/Navbar';

export default class Header extends Component {
  render() {
    return (
      <header className="header-style-1">
        <TopMenu></TopMenu>

        <div className="main-header">
          <div className="container">
            <div className="row">
              <Logo></Logo>
              <Search></Search>
              <Cart></Cart>
              <Navbar></Navbar>
            </div>
          </div>
        </div>

      </header>
    );
  }
}
