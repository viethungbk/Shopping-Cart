import React, { Component } from 'react';

import Header from '../Header/Header';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

export default class Layout extends Component {
  render() {
    return (
      <div className="container-fluid cnt-home" id="top-banner-and-menu">
        <div className="row">
          <Header></Header>
        </div>

        <div className="row body-content outer-top-vs">
          <div className="container">
            <div className="row">
              <SideBar></SideBar>
              { this.props.children }
            </div>
          </div>
        </div>

        <div className="row">
          <InfoBoxes></InfoBoxes>
        </div>

        <div className="row">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
