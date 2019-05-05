import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <div className="body-content">
        <div className="container">
          <div className="contact-page">
            <div className="row">

              {/* Map */}
              <div className="col-md-12 contact-map outer-bottom-vs">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6776562941!2d105.8412687513203!3d21.005554585942257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2sHanoi+University+of+Science+and+Technology!5e0!3m2!1sen!2s!4v1556990086903!5m2!1sen!2s" width={600} height={450} style={{border: 0}} />
              </div>

              {/* Form dien thong tin lien lac */}
              <div className="col-md-8 contact-form">
                <div className="col-md-12 contact-title">
                  <h4>Contact Form</h4>
                </div>
                <div className="col-md-4 ">
                  <form className="register-form">
                    <div className="form-group">
                      <label className="info-title" htmlFor="exampleInputName">Your Name <span>*</span></label>
                      <input type="email" className="form-control unicase-form-control text-input" id="exampleInputName" placeholder />
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                  <form className="register-form">
                    <div className="form-group">
                      <label className="info-title" htmlFor="exampleInputEmail1">Email Address <span>*</span></label>
                      <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder />
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                  <form className="register-form">
                    <div className="form-group">
                      <label className="info-title" htmlFor="exampleInputTitle">Title <span>*</span></label>
                      <input type="email" className="form-control unicase-form-control text-input" id="exampleInputTitle" placeholder="Title" />
                    </div>
                  </form>
                </div>
                <div className="col-md-12">
                  <form className="register-form">
                    <div className="form-group">
                      <label className="info-title" htmlFor="exampleInputComments">Your Comments <span>*</span></label>
                      <textarea className="form-control unicase-form-control" id="exampleInputComments" defaultValue={""} />
                    </div>
                  </form>
                </div>
                <div className="col-md-12 outer-bottom-small m-t-20">
                  <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Send Message</button>
                </div>
              </div>

              {/* Thong tin them */}
              <div className="col-md-4 contact-info">
                <div className="contact-title">
                  <h4>Information</h4>
                </div>
                <div className="clearfix address">
                  <span className="contact-i"><i className="fa fa-map-marker" /></span>
                  <span className="contact-span">So 1 Dai Co Viet, Truong DH Bach Khoa Ha Noi</span>
                </div>
                <div className="clearfix phone-no">
                  <span className="contact-i"><i className="fa fa-mobile" /></span>
                  <span className="contact-span">+(888) 123-4567<br />+(888) 456-7890</span>
                </div>
                <div className="clearfix email">
                  <span className="contact-i"><i className="fa fa-envelope" /></span>
                  <span className="contact-span"><Link to="">viethung@gmail.com</Link></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
