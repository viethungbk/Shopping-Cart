import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Slider extends Component {
  render() {
    return (
      <div id="hero">
        <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
          <div className="item" style={{ backgroundImage: 'url(/assets/images/sliders/01.jpg)' }}>
            <div className="container-fluid">

              {/* caption */}
              <div className="caption bg-color vertical-center text-left">
                <div className="slider-header fadeInDown-1">Samsung Hot</div>
                <div className="big-text fadeInDown-1"> SALE OFF 50 %</div>
                <div className="excerpt fadeInDown-2 hidden-xs"> <span>Giảm ngay 300K khi thanh toán bằng Samsung Pay.</span> </div>
                <div className="button-holder fadeInDown-3"> <Link to="/" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</Link> </div>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: 'url(/assets/images/sliders/02.jpg)' }}>
            <div className="container-fluid">
              <div className="caption bg-color vertical-center text-left">
                <div className="slider-header fadeInDown-1">Spring 2018</div>
                <div className="big-text fadeInDown-1"> Women Fashion </div>
                <div className="excerpt fadeInDown-2 hidden-xs"> <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span> </div>
                <div className="button-holder fadeInDown-3"> <Link to="" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</Link> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
