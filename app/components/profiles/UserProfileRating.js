import React, {Component} from 'react';

export default class UserProfileCheckIn extends Component {
    render() {
        return (
            <div className="row">
              <div>
                <h4>Your Ratings:</h4>
              </div>
              <div className="well well-sm">
                <p>Name: This Fine Place</p>
                <p>Your Rating: Splendid</p>
                <p>Comments:<br /> "yoohoo! Best shit I ever took!"</p>
              </div>
            </div>
        )
    }
}
