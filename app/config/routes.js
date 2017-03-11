import {AuthenticatedRoute, HomeRoute, LoginRoute, Router}
  from 'react-stormpath';
import {IndexRoute, Route, browserHistory} from 'react-router';
import IndexPage from '../components/IndexPage';
import LoginPage from '../components/LoginPage';
import Main from '../components/main';
import ProfilePage from '../components/ProfilePage';
import React from 'react';
import RegistrationPage from '../components/RegistrationPage';

const Routes = () =>
    <Router history={ browserHistory }>
        <HomeRoute path="/" component={ Main }>
            <IndexRoute component={ IndexPage } />
            <LoginRoute path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegistrationPage } />
            <AuthenticatedRoute>
                <HomeRoute path="/profile" component={ ProfilePage } />
            </AuthenticatedRoute>
          </HomeRoute>
    </Router>

export default Routes;
