import React, { Component } from 'react';

export default class InfoBoxes extends Component {
    render() {
        return (
            <div className="row our-features-box">
                <div className="container">
                    <ul>
                        <li>
                            <div className="feature-box">
                                <div className="icon-truck" />
                                <div className="content-blocks">We ship worldwide</div>
                            </div>
                        </li>
                        <li>
                            <div className="feature-box">
                                <div className="icon-support" />
                                <div className="content-blocks">call
                                +1 800 789 0000</div>
                            </div>
                        </li>
                        <li>
                            <div className="feature-box">
                                <div className="icon-money" />
                                <div className="content-blocks">Money Back Guarantee</div>
                            </div>
                        </li>
                        <li>
                            <div className="feature-box">
                                <div className="icon-return" />
                                <div className="content">30 days return</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
