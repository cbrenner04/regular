import React from 'react'

const OFFSET = 1;

const Places = ({venues}) =>
    <div>
        <h1 className="text-center places">Possible Venues with Bathrooms</h1>
        {
            venues.map((venue, index) =>
                <a href={`/#/establishments/${venue.id}`}
                   className="btn btn-default btn-lg btn-block places-well"
                   key={venue.id}>
                    {`${index + OFFSET}. ${venue.name}`}
                </a>
            )
        }
    </div>

export default Places
