import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";

//Chỗ này cực kì lưu ý: Nó được cải tiến rồi này !
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk)),
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/admin" exact component={LayoutAdmin} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
