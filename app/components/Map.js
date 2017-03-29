import {GoogleMap, GoogleMapLoader, InfoWindow, Marker} from 'react-google-maps'
import React, {Component} from 'react'

const OFFSET = 1;

export default class Map extends Component {
    constructor() {
        super();
        this.state = {markers: []}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            markers: nextProps.markers.map((marker) => {
                const {location} = marker
                return ({
                    name: marker.name,
                    position: location
                })
            })
        })
    }

    handleMarkerClick(targetMarker) {
        this.setState({
            markers: this.state.markers.map((marker) => {
                const infoStatus = marker.name === targetMarker.name
                return Object.assign({}, marker, { showInfo: infoStatus })
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
                <GoogleMap defaultZoom={17}
                           center={this.props.center}
                           options={{
                               mapTypeControl: false,
                               streetViewControl: false
                           }}>

                    { this.state.markers.map((venue, index) => {
                        const {position} = venue
                        const marker = {
                            name: venue.name,
                            position: position,
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
