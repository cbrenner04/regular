import React, {Component} from 'react'
import Foursquare from '../../foursquareApiKey'
import Map from './Map'
import Places from './Places'
import superagent from 'superagent'

class Container extends Component {
    constructor() {
        super()
        this.state = {venues: []}
    }

    componentDidMount() {
        const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&l' +
                    `l=41.896797,-87.619278&client_id=${Foursquare.id}&client` +
                    `_secret=${Foursquare.secret}`

        superagent.get(url).query(null).
            set('Accept', 'text/json').
            end((error, response) => {
                const {venues} = response.body.response
                this.setState({venues})
            })
    }

    render() {
        const location = {
            lat: 41.896797,
            lng: -87.61927
        }

        return (
            <div>
                <div style={{
                    background: 'red',
                    height: 600,
                    width: 800
                }}>
                    <Map
                        center={location}
                        markers={this.state.venues}
                    />
                </div>
                <Places venues={this.state.venues} />
            </div>
        )
    }
}

export default Container;
