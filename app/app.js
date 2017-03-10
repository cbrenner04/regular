import {IndexRoute, Route, browserHistory} from 'react-router';
import ReactStormpath, {AuthenticatedRoute, HomeRoute, LoginRoute, Router}
  from 'react-stormpath';
import {IndexPage} from './components/IndexPage';
import {LoginPage} from './components/LoginPage';
import {Main} from './components/main';
import {ProfilePage} from './components/ProfilePage';
import React from 'react';
import ReactDOM from 'react-dom';
import {RegistrationPage} from './components/RegistrationPage';

ReactStormpath.init();

ReactDOM.render(
    <Router history={ browserHistory }>
        <HomeRoute path="/" component={ Main }>
            <IndexRoute component={ IndexPage } />
            <LoginRoute path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegistrationPage } />
            <AuthenticatedRoute>
                <HomeRoute path="/profile" component={ ProfilePage } />
            </AuthenticatedRoute>
          </HomeRoute>
    </Router>,
    document.getElementById('app')
);
