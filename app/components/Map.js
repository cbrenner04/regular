import {GoogleMap, GoogleMapLoader, InfoWindow, Marker} from 'react-google-maps'
import React, {Component} from 'react'

const OFFSET = 1;

export default class Map extends Component {
    constructor() {
        super();
        this.state = {
            location: {
                lat: 41.8818695,
                lng: -87.629838
            },
            markers: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            location: {
                lat: nextProps.center.lat,
                lng: nextProps.center.lng
            },
            markers: nextProps.markers.map((marker) => {
                return ({
                    name: marker.name,
                    position: {
                        lat: marker.location.lat,
                        lng: marker.location.lng
                    }
                })
            })
        })
    }

    handleMarkerClick(targetMarker) {
        this.setState({
            markers: this.state.markers.map((marker) => {
                if (marker.name === targetMarker.name) {
                    return Object.assign({}, marker, { showInfo: true })
                } else {
                    return Object.assign({}, marker, { showInfo: false })
                }
            })
        })
    }

    render() {
        return (
            <GoogleMapLoader containerElement = {
                <div style={{
                    height: '100%',
                    width: '100%'
                }}></div>
            }
            googleMapElement = {
                <GoogleMap defaultZoom={18}
                           defaultCenter={this.state.location}
                           options={{
                               mapTypeControl: false,
                               streetViewControl: false
                           }}>

                    { this.state.markers.map((venue, index) => {
                        const marker = {
                            name: venue.name,
                            position: {
                                lat: venue.position.lat,
                                lng: venue.position.lng
                            },
                            showInfo: venue.showInfo
                        }

                        return (
                            <Marker
                                key={index} {...marker}
                                onClick={
                                    () => {
                                        this.handleMarkerClick(marker)
                                    }
                                }>
                                { marker.showInfo && (
                                    <InfoWindow>
                                        <a href={`/#/establishments/${venue.id}`}>
                                            {`${index + OFFSET}. ${venue.name}`}
                                        </a>
                                    </InfoWindow>
                                )}
                            </Marker>
                        )
                    }) }
                </GoogleMap>
            } />
        )
    }
}
