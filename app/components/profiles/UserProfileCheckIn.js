import React from 'react';
import moment from 'moment';
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
                    <p><b>Favorited:</b> {moment(establishment.createdAt).format('LLL')}</p>
                </div>
            )
        }
    </div>

export default UserProfileCheckIn;
