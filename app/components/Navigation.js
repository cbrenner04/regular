import {Authenticated, LoginLink, LogoutLink, NotAuthenticated}
  from 'react-stormpath';
import {Link} from 'react-router';
import React from 'react';

const Navigation = () =>
    <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
            <div id="navbar-collapse"
                 className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <NotAuthenticated>
                        <li><Link to="/">Regular</Link></li>
                    </NotAuthenticated>
                    <Authenticated>
                        <li><Link to="/home">Regular</Link></li>
                    </Authenticated>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <NotAuthenticated>
                        <li><LoginLink /></li>
                    </NotAuthenticated>
                    <NotAuthenticated>
                        <li><Link to="/register">Create Account</Link></li>
                    </NotAuthenticated>
                    <Authenticated>
                        <li><Link to="/profile">Profile</Link></li>
                    </Authenticated>
                    <Authenticated>
                        <li><LogoutLink /></li>
                    </Authenticated>
                </ul>
            </div>
        </div>
    </nav>

export default Navigation;
