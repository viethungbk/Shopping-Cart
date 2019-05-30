import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actFetchAllSlidersRequest } from '../../../actions/index';

class Slider extends Component {
  componentDidMount() {
    this.props.onFetchAllSliders();
  }

  showSliders(sliders) {
    let listSliders = sliders.map((slider, index) => {
      return (
        <div key={index} className="item" style={{ backgroundImage: 'url(/assets/images/sliders/01.jpg)' }} >
          <div className="container-fluid">
            <div className="caption bg-color vertical-center text-left">
              <div className="slider-header fadeInDown-1">{slider.sliderheader}</div>
              <div className="big-text fadeInDown-1">{slider.bigtext}</div>
              <div className="excerpt fadeInDown-2 hidden-xs"> <span>{slider.detail}</span> </div>
              <div className="button-holder fadeInDown-3"> <Link to="/" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</Link> </div>
            </div>
          </div>
        </div>
      );
    });

    return listSliders;
  }

  render() {
    return (
      <div id="hero">
        <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">

          <div className="item" style={{ backgroundImage: 'url(/assets/images/sliders/01.jpg)' }}>
            <div className="container-fluid">
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
                <div className="slider-header fadeInDown-1">Samsung 2019</div>
                <div className="big-text fadeInDown-1">Samsung Salaxy Note 9</div>
                <div className="excerpt fadeInDown-2 hidden-xs"> <span>Nhận ngay quà tặng hấp dẫn</span> </div>
                <div className="button-holder fadeInDown-3"> <Link to="" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</Link> </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sliders: state.sliders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAllSliders: () => {
      dispatch(actFetchAllSlidersRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);