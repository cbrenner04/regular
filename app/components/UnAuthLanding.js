import {Link} from 'react-router';
import {NotAuthenticated} from 'react-stormpath';
import React from 'react';

const UnAuthLanding = () =>
    <div className="container">
        <div className="jumbotron text-center" id="jumbo">
            <div>
                <div className="main-text">
                    <div className="text-primary" id="special">REGULAR</div>
                    <h3 className="text-primary">
                        Rate and Find any bathroom in the city
                    </h3>
                    <br />
                    <NotAuthenticated>
                        <Link className="btn btn-primary"
                              to="/register">Register!</Link>
                    </NotAuthenticated>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <div className="well well-lg text-center">
                <h3>ABOUT</h3>
                <p>
                    Ever wonder what is the second most important part about
                    eating out, shopping, going to the
                    movies, partying on Saturday, picnicking in the
                    park or strolling down Main street?
                </p>
                <p>
                    Bathrooms.
                </p>
                <p>
                    It's true, we rate just about everything these days...
                    except bathrooms. They are an integral part of our lives and
                    our enjoyment of any experience.
                    That is why we created REGULAR.
                </p>
            </div>
        </div>
    </div>

export default UnAuthLanding;
