import React, { Component } from 'react';
import Contact from './Contact';
import Services from './Services';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer color-bg">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <Contact></Contact>
                            <Services></Services>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
