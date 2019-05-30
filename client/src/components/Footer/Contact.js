import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
									<p>So 1 Dai Co Viet, Truong DH Bach Khoa Ha Noi</p>
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
								<div className="media-body"> <span><Link to="">viethung@gmail.com</Link></span> </div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
