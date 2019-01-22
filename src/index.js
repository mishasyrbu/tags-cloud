import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import HomePage from './containers/HomePage';
import TagDetails from './containers/TagDetails';
import './index.scss';

ReactDOM.render((
    <div className="app-container">
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/tag/:id" component={TagDetails} />
            </Switch>
        </Router>
    </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
