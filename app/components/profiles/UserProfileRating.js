import React, {Component} from 'react';

export default class UserProfileCheckIn extends Component {
    render() {
        return (
            <div className="row">
              <div>
                <h1>Bathrooms that you've rated:</h1>
              </div>
              <div className="well well-sm">
                <p>Name: This Fine Place</p>
                <p>Your Rating: 8.9</p>
                <p>Comments:<br /> "yoohoo! Best shit I ever took!"</p>
              </div>
            </div>
        )
    }
}
