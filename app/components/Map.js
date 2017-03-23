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
                defaultZoom={18}
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
                            },
                            name: venue.name
                        }

                        return <Marker 
                                    key={index}
                                    {...marker}
                                >
                                    <InfoWindow>
                                        <a href={`/#/establishments/${venue.id}`}>
                                            {`${index + 1}. ${venue.name}`}
                                        </a>
                                    </InfoWindow>
                                </Marker>
                    })
                }
            </GoogleMap>
        }
    />

export default Map
