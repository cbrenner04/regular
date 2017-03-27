import React from 'react';

const UserProfileCheckIn = ({establishments}) =>
    establishments.map((establishment) =>
        <div className="well well-sm">
            <p><b>Name:</b>{}</p>
            <p><b>Your Rating:</b>{establishment.rating}</p>
            <p><b>Comments:</b><br />{establishment.comment}</p>
        </div>
    )

export default UserProfileCheckIn;
