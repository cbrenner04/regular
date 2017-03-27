import React from 'react';
import moment from 'moment';
const UserProfileCheckIn = ({establishments}) =>
    <div className="row">
        {
            establishments.map((establishment) =>
                <div className="well well-sm" key={establishment._id}>
                    <p><b>Name:</b> {establishment.establishment.name}</p>
                    <p><b>Checked In:</b> {moment(establishment.createdAt).format('LLL')}</p>
                </div>
            )
        }
    </div>

export default UserProfileCheckIn;
