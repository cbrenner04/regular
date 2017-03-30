import React, {Component} from 'react';
import moment from 'moment';

export default class UserProfileCheckIn extends Component {

    ratingLabel(rating) {
        if (Math.round(rating) === 1) {
            return 'TERRIBLE';
        } else if (Math.round(rating) === 2) {
            return 'DECENT';
        } else if (Math.round(rating) === 3) {
            return 'SPLENDID';
        } else {
            return 'N/A';
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.establishments.map((establishment) =>
                        <div className="well well-sm" key={establishment._id}>
                            <p><strong>Name: </strong>
                                <a href={`/#/establishments/${establishment.establishment.fourSquareId}`}>
                                    {establishment.establishment.name}
                                </a>
                            </p>
                            <p><b>Favorited:</b> {moment(establishment.createdAt).format('LLL')}</p>
                            <p><strong>Your Rating:</strong> <strong className="text-warning">
                                {this.ratingLabel(establishment.rating)}</strong></p>
                            <p><strong>Comments:</strong><br /> {establishment.comment}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
