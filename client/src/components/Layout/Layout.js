import React, { Component } from 'react';
import Header from '../Header/Header';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header></Header>

        <div className="Body">
          { this.props.children }
        </div>

        <InfoBoxes></InfoBoxes>
        <Footer></Footer>
      </div>
    );
  }
}
