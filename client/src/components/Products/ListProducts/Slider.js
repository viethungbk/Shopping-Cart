import React, { Component } from 'react';

export default class Slider extends Component {
  render() {
      return (

        <div  >
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner" style={{height:500}}>
              <div className="item active">
                <img src="assets/images/banners/banner-side.png" alt="Los Angeles" style={{ width: '100%'}} />
              </div>
              <div className="item">
                <img src="assets/images/banners/home-banner.jpg" alt="Chicago" style={{ width: '100%' }} />
                <img src="assets/images/banners/home-banner.jpg" alt="Chicago" style={{ width: '100%' }} />
              </div>
              <div className="item">
                <img src="assets/images/banners/banner-side.png" alt="New york" style={{ width: '100%' }} />
              </div>
            </div>
            {/* Left and right controls */}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      
      );
    }

}



