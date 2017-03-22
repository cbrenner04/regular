import {GoogleMap, GoogleMapLoader, InfoWindow, Marker} from 'react-google-maps'
import React from 'react'

const Map = ({center, markers}) =>
    <GoogleMapLoader
        containerElement = {
            <div style={{
                height: '100%',
                width: '100%'
            }}></div>
        }
        googleMapElement = {
            <GoogleMap
                defaultZoom={15}
                defaultCenter={center}
                options={{
                    mapTypeControl: false,
                    streetViewControl: false
                }}>

                {
                    markers.map((venue, index) => {
                        const marker = {
                            position: {
                                lat: venue.location.lat,
                                lng: venue.location.lng
                            }
                        }

                        return <Marker
                                    key={index}
                                    {...marker}
                                >
                                        <InfoWindow>
                                            HELLO
                                        </InfoWindow>
                                </Marker>
                    })
                }
            </GoogleMap>
        }
    />

export default Map
