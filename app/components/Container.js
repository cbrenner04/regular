import React from 'react';
import {GoogleApiWrapper, Map, Listing, Marker, InfoWindow, google} from 'google-maps-react'
import GoogleApiKey from '../../googleApiKey'

export class Container extends React.Component {
    render() {    
        return (
          <div>
              <Map google={this.props.google}
                   visible={true}
                   zoom={14}
              >
                <Marker
                  name={'Your position'}
                  position={{lat: 37.762391, lng: -122.439192}}
                />
              </Map>
          </div>
        )
    }
}

export default GoogleApiWrapper(GoogleApiKey)(Container)
