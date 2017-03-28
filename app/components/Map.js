import {GoogleMap, GoogleMapLoader, InfoWindow, Marker} from 'react-google-maps'
import React, {Component} from 'react'

const OFFSET = 1;

export default class Map extends Component {
    constructor() {
        super();
        this.state = {
            showInfo: false
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <GoogleMapLoader
                containerElement = {
                    <div style={{
                        height: '100%',
                        width: '100%'
                    }}></div>
                }
                googleMapElement = {
                    <GoogleMap defaultZoom={18}
                               defaultCenter={this.props.center}
                               options={{
                                   mapTypeControl: false,
                                   streetViewControl: false
                               }}>

                        {
                            this.props.markers.map((venue, index) => {
                                const marker = {
                                    name: venue.name,
                                    position: {
                                        lat: venue.location.lat,
                                        lng: venue.location.lng
                                    }
                                }

                                return (
                                    <Marker
                                        key={index} {...marker}
                                        onClick={() => this.props.infoWindowToggle(marker)}
                                    >
                                        { marker.showInfo && (
                                            <InfoWindow>
                                                <a href={`/#/establishments/${venue.id}`}>
                                                    {`${index + OFFSET}. ${venue.name}`}
                                                </a>
                                            </InfoWindow>
                                        )}
                                    </Marker>
                                )
                            })
                        }
                    </GoogleMap>
                }
            />
        )
    }
}
