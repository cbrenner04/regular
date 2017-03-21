import React from 'react'

const Places = ({venues}) =>
    <div>
        <h1>Venues</h1>
        <ol>
            {
                venues.map((venue, index) =>
                    <li key={index}>{venue.name}</li>
                )
            }
        </ol>
    </div>

export default Places
