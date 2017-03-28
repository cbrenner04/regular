import React from 'react';

const UserProfileCheckIn = ({establishments}) =>
    <div>
        {
            establishments.map((establishment) =>
                <div className="well well-sm" key={establishment._id}>
                    <p><b>Name: </b>
                        <a href={`/#/establishments/${establishment.establishment.fourSquareId}`}>
                            {establishment.establishment.name}
                        </a>
                    </p>
                    <p><b>Your Rating:</b> {establishment.rating}</p>
                    <p><b>Comments:</b><br /> {establishment.comment}</p>
                </div>
            )
        }
    </div>

export default UserProfileCheckIn;
