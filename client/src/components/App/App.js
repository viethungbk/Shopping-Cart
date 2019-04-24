import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import Footer from '../Footer/Footer';
import Products from '../../Product/Products';
import Register from '../Register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>

        <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
          <Products></Products>
          <Products></Products>
          <Products></Products>
          <Products></Products>
        </div>

        <InfoBoxes></InfoBoxes>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
