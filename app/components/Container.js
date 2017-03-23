import React, {Component} from 'react'
import Foursquare from '../../foursquareApiKey'
import Map from './Map'
import Places from './Places'
import superagent from 'superagent'

class Container extends Component {
    constructor() {
        super()
        this.state = {
            venues: [],
            location: {
                lat: 41.8818695,
                lng: -87.629838
            }
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                location: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            })

            this.doFourSquare();

        }, () => {
            this.setState({
                location: {
                    lat: 41.8818695,
                    lng: -87.629838
                }
            })

            this.doFourSquare();
        });
    }

    doFourSquare() {
        const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&l' +
                    `l=${this.state.location.lat},${this.state.location.lng}&` +
                    `client_id=${Foursquare.id}&client_secret=` +
                    `${Foursquare.secret}`

        superagent.get(url).query(null).
            set('Accept', 'text/json').
            end((error, response) => {
                const {venues} = response.body.response
                this.setState({venues})
            })
    }

    render() {
        return (
            <div>
                <div style={{
                    background: 'red',
                    height: '50vh',
                    width: '100%'
                }}>
                    <Map center={this.state.location}
                         markers={this.state.venues}
                    />
                </div>
                <Places venues={this.state.venues} />
            </div>
        )
    }
}

export default Container;
