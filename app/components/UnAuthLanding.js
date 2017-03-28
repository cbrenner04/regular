import {Link} from 'react-router';
import {NotAuthenticated} from 'react-stormpath';
import React from 'react';

const UnAuthLanding = () =>
    <div className="container">
        <div className="jumbotron text-center" id="jumbo">
            <div>
                <div className="main-text">
                    <h1 className="text-primary">REGULAR</h1>
                    <h3 className="text-primary">
                        <b>Rate and find any bathroom in the city</b>
                    </h3>
                    <h4 className="text-primary">
                        <b>Made the Editor's Pick on the Apple App store</b>
                    </h4>
                    <NotAuthenticated>
                        <Link className="btn btn-primary"
                              to="/register">Register!</Link>
                    </NotAuthenticated>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <div className="well well-lg">
                <h3>ABOUT US</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce tempor neque ut purus mollis luctus. Fusce maximus
                    felis sem, nec feugiat ex posuere sit amet. Quisque non elit
                    nec lectus tempus imperdiet vel non lorem. Praesent nulla
                    ipsum, consectetur rhoncus ex eget, feugiat aliquet arcu.
                    Sed porttitor pharetra rhoncus. Vivamus consequat leo eget
                    nibh egestas tincidunt. Nunc at velit et sapien ultrices
                    elementum. Duis vitae auctor ante. Nam sit amet placerat
                    lacus. Curabitur lorem lacus, commodo gravida posuere
                    maximus, laoreet a nisi. Nulla non eros sit amet leo
                    pellentesque luctus. Donec maximus leo at nibh aliquam, eu
                    consequat risus pretium. Pellentesque odio enim, aliquam et
                    nisl eu, egestas viverra ante. Vivamus sed purus id nulla
                    vulputate ultricies at nec tellus.
                </p>
                <br />
                <p>
                    Proin ac ultricies lorem. Aliquam erat volutpat. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed at gravida
                    mi. Mauris id pretium diam. Nam dolor quam, fermentum sed
                    iaculis vel, tempor quis nulla. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Quisque quis libero ultricies, porttitor enim ultrices,
                    auctor dui. Donec consequat nulla vitae sapien maximus
                    pellentesque. Praesent magna lectus, venenatis non dapibus
                    at, mattis in tellus. Vestibulum dignissim consequat eros, a
                    varius dolor.
                </p>
            </div>
        </div>
    </div>

export default UnAuthLanding;
