import {Link} from 'react-router';
import {LoginLink, NotAuthenticated} from 'react-stormpath';
import React from 'react';

const UnAuthLanding = () =>
    <div className="container">
      <div className="jumbotron text-center" id="jumbo">
        <div className="well well-sm main-wrapper">
          <div className="main-text">
            <h1 id="opacity-one">REGULAR</h1>
              <h3 id="opacity-one">Rate and find any bathroom in the city</h3>
              <h4 id="opacity-one">Made the Editor's Pick on the Apple App store</h4>
              <NotAuthenticated>
                <Link className="btn btn-primary" id="opacity-one" to="/register">Register!</Link>
              </NotAuthenticated>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="well well-lg">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tempor neque ut purus mollis luctus. Fusce maximus felis sem, nec
            feugiat ex posuere sit amet. Quisque non elit nec lectus tempus
            imperdiet vel non lorem. Praesent nulla ipsum, consectetur rhoncus
            ex eget, feugiat aliquet arcu. Sed porttitor pharetra rhoncus.
            Vivamus consequat leo eget nibh egestas tincidunt. Nunc at velit et
            sapien ultrices elementum. Duis vitae auctor ante. Nam sit amet
            placerat lacus. Curabitur lorem lacus, commodo gravida posuere
            maximus, laoreet a nisi. Nulla non eros sit amet leo pellentesque
            luctus. Donec maximus leo at nibh aliquam, eu consequat risus pretium.
            Pellentesque odio enim, aliquam et nisl eu, egestas viverra ante.
            Vivamus sed purus id nulla vulputate ultricies at nec tellus.
            <br />
            Proin ac ultricies lorem. Aliquam erat volutpat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed at gravida mi. Mauris id
            pretium diam. Nam dolor quam, fermentum sed iaculis vel, tempor quis
            nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Quisque quis libero ultricies,
            porttitor enim ultrices, auctor dui. Donec consequat nulla vitae sapien
            maximus pellentesque. Praesent magna lectus, venenatis non dapibus at,
            mattis in tellus. Vestibulum dignissim consequat eros, a varius dolor.
            </p>
        </div>
      </div>
    </div>

export default UnAuthLanding;
