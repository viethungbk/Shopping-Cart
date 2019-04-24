import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="address-block">
          <div className="module-body">
            <ul className="toggle-footer" style={{}}>
              <li className="media">
                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse" /> </span> </div>
                <div className="media-body">
                  <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                </div>
              </li>
              <li className="media">
                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse" /> </span> </div>
                <div className="media-body">
                  <p> + (888) 123-4567 / + (888) 456-7890</p>
                </div>
              </li>
              <li className="media">
                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse" /> </span> </div>
                <div className="media-body"> <span><a href="#">marazzo@themesground.com</a></span> </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
