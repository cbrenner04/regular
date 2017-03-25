import React, {Component} from 'react';
import Foursquare from '../../foursquareApiKey';
import superagent from 'superagent';

export default class Establishment extends Component {
    constructor() {
        super()
        this.state = {
            venueAddress: '',
            venueCrossStreet: '',
            venueId: '',
            venueName: ''
        }
    }

    componentDidMount() {
        const url = 'https://api.foursquare.com/v2/venues/' +
                    `${this.props.params.eId}?v=20140806&client_id=` +
                    `${Foursquare.id}&client_secret=${Foursquare.secret}`

        superagent.get(url).query(null).
            set('Accept', 'text/json').
            then((response) => {
                const {venue} = response.body.response

                return this.setState({
                    venueAddress: venue.location.address,
                    venueCrossStreet: venue.location.crossStreet,
                    venueId: venue.id,
                    venueName: venue.name
                })
            }).
            then(() => superagent.get(`/bathroom/${this.state.venueId}`))
    }

    render() {
        return (
            <div className="container">
                <h1>{ this.state.venueName }</h1>
                <h2>{ this.state.venueAddress }</h2>
                <h3>{ this.state.venueCrossStreet }</h3>
            </div>
        )
    }
}
