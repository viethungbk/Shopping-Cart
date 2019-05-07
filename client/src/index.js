import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/admin" exact component={LayoutAdmin} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
