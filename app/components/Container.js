<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './Map'
import Places from './Places'
import superagent from 'superagent'
import Foursquare from '../../foursquareApiKey'

class Container extends Component {
  constructor(){
    super()
    this.state = {
      venues: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount')

    const url = `https://api.foursquare.com/v2/venues/search?v=20140806&ll=41.896797,-87.619278&client_id=${Foursquare.id}&client_secret=${Foursquare.secret}`

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {

      const venues = response.body.response.venues
      console.log(JSON.stringify(venues))

      this.setState({
        venues: venues
      })
    })

  }

  render(){
    const location = {
      lat: 41.896797,
      lng: -87.61927
    }

    return (
      <div>
        <div style={{width:800, height:600, background:'red'}}>
          <Map center={location} markers={this.state.venues} />
        </div>
        <Places venues={this.state.venues} />
      </div>
    )
  }
>>>>>>> Fix up code
}

export default GoogleApiWrapper(GoogleApiKey)(Container)
