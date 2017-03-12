import {Link} from 'react-router';
import {LoginLink, NotAuthenticated} from 'react-stormpath';
import React from 'react';

const UnAuthLanding = () =>
    <div className="container">
      <div className="jumbotron text-center" id="jumbo">
        <div className="main-text">
          <h1>REGULAR</h1>
            <h3>Rate and find any bathroom in the city</h3>
            <h4>Made the Editor's Pick on the Apple App store</h4>
            <NotAuthenticated>
              <Link className="btn btn-primary" to="/register">Register!</Link>
            </NotAuthenticated>
            <a className="btn btn-success">About Us</a>
        </div>
      </div>
    </div>

export default UnAuthLanding;
