import {AuthenticatedRoute, HomeRoute, LoginRoute, Router}
  from 'react-stormpath';
import {IndexRoute, Route, hashHistory} from 'react-router';
import AuthLanding from '../components/AuthLanding';
import Establishment from '../components/Establishment';
import LoginPage from '../components/LoginPage';
import Main from '../components/main';
import Profile from '../components/Profile';
import React from 'react';
import RegistrationPage from '../components/RegistrationPage';
import ResetPasswordPage from '../components/ResetPasswordPage';
import UnAuthLanding from '../components/UnAuthLanding';

const Routes = () =>
    <Router history={ hashHistory }>
        <HomeRoute path="/" component={ Main }>
            <IndexRoute component={ UnAuthLanding } />
            <LoginRoute path="/login" component={ LoginPage } />
            <Route path="/forgot" component={ ResetPasswordPage } />
            <Route path="/register" component={ RegistrationPage } />
            <AuthenticatedRoute>
                <Route path="/map" component={ AuthLanding } />
                <Route path="/profile" component={ Profile } />
                <Route path="/establishments(/:eId)"
                       component={ Establishment } />
            </AuthenticatedRoute>
        </HomeRoute>
    </Router>

export default Routes;
