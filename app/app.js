import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import { Main } from './components/main';
import { IndexPage } from './components/IndexPage';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { ProfilePage } from './components/ProfilePage';
 
ReactStormpath.init();

ReactDOM.render(
  <Router history={ browserHistory }>
	  <HomeRoute path='/' component={ Main }>
		  <IndexRoute component={ IndexPage } />
		  <LoginRoute path='/login' component={ LoginPage } />
		  <Route path='/register' component={ RegistrationPage } />
		  <AuthenticatedRoute>
			  <HomeRoute path='/profile' component={ ProfilePage } />
			</AuthenticatedRoute>
		</HomeRoute>
	</Router>,
  document.getElementById('app')
);
