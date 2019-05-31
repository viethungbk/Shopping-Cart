import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './components/App/App';
import LayoutAdmin from './components/Admin/LayoutAdmin';

class MyRoute extends Component {
	render() {
		return (
			<Router>
				<div className="Route">
					<Switch>
						<Route path="/" exact component={App} />
						<Route path="/admin" component={LayoutAdmin} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default MyRoute;