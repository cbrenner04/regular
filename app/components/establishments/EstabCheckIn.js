import React, {Component} from 'react';

export default class EstabCheckIn extends Component  {
    onCheckIn(checkIn) {
        this.props.onCheckInResponse(checkIn);
    }
    render() {
        return (
          <div className="row">
                <div className="gender-main">
                    <h2>Do you want to check In to this bathroom?</h2>
                    <div className="col-xs-12">
                      <button className="btn btn-default"
                              onClick={ (checkIn) => { this.onCheckIn('checkIn') } }>
                          Check In!
                      </button>
                  </div>
                </div>
              </div>
        )
    }
}
