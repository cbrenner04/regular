import React, {Component} from 'react';

export default class UserProfileCheckIn extends Component {
    render() {
        return (
            <div className="row">
              <div>
                <h4>You Places:</h4>
              </div>
              <div className="well well-sm">
                <p>Name: This Fine Place</p>
                <p>Checked In: 3:02pm on Friday, March 17th, 2017</p>
              </div>
            </div>
        )
    }
}
