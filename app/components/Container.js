import React from 'react';
import {GoogleApiWrapper, Map, Listing, Marker, InfoWindow} from 'google-maps-react'
import GoogleApiKey from '../../googleApiKey'

export class Container extends React.Component {
    render() {    
        return (
          <div>
              <Map google={this.props.google}
                   visible={true}
                   zoom={14}
              >
              </Map>
          </div>
        )
    }
}

export default GoogleApiWrapper(GoogleApiKey)(Container)
