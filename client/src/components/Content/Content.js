import React, { Component } from 'react';
import Slider from '../Products/ListProducts/Slider';
import ListProducts from '../Products/ListProducts/ListProducts';

export default class Content extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
        <Slider></Slider>
        <ListProducts>New Products</ListProducts>
        <ListProducts>Samsung</ListProducts>
        <ListProducts>Oppo</ListProducts>
      </div>
    );
  }
}
