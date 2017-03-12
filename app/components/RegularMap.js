import {Link} from 'react-router';
import {LoginLink} from 'react-stormpath';
import React from 'react';

const RegularMap = () =>
    <div className="container">
        <div className="pac-card" id="pac-card">
          <div>
            <div id="title">
              Autocomplete search
            </div>
            <div id="type-selector" className="pac-controls">
              <input type="radio" name="type" id="changetype-all" checked="checked" />
              <label htmlFor="changetype-all">All</label>

              <input type="radio" name="type" id="changetype-establishment" />
              <label htmlFor="changetype-establishment">Establishments</label>

              <input type="radio" name="type" id="changetype-address" />
              <label htmlFor="changetype-address">Addresses</label>

              <input type="radio" name="type" id="changetype-geocode" />
              <label htmlFor="changetype-geocode">Geocodes</label>
            </div>
            <div id="strict-bounds-selector" className="pac-controls">
              <input type="checkbox" id="use-strict-bounds" value="" />
              <label htmlFor="use-strict-bounds">Strict Bounds</label>
            </div>
          </div>
          <div id="pac-container">
            <input id="pac-input" type="text"
                placeholder="Enter a location" />
          </div>
        </div>
        <div id="map"></div>
        <div id="infowindow-content">
          <img src="" width="16" height="16" id="place-icon" />
          <span id="place-name"  className="title"></span><br />
          <span id="place-address"></span>
        </div>
    </div>

export default RegularMap;
