import React, {Component} from 'react';

const TERRIBLE_RATING = 1;
const DECENT_RATING = 2;
const SPLENDID_RATING = 3;

export default class EstabRating extends Component {
    constructor() {
        super();
        this.state = {
            terribleButtonStyle: 'default',
            decentButtonStyle: 'default',
            splendidButtonStyle: 'default'
        }
    }
    onRating(rating) {
        if (rating === TERRIBLE_RATING) {
            this.setState({
                terribleButtonStyle: 'danger',
                decentButtonStyle: 'default',
                splendidButtonStyle: 'default'
            })
        } else if (rating === DECENT_RATING) {
            this.setState({
                terribleButtonStyle: 'default',
                decentButtonStyle: 'danger',
                splendidButtonStyle: 'default'
            })
        } else if (rating === SPLENDID_RATING) {
            this.setState({
                terribleButtonStyle: 'default',
                decentButtonStyle: 'default',
                splendidButtonStyle: 'danger'
            })
        }

        this.props.onRatingResponse(rating);
    }
    render() {
        return (
            <div className="row">
                <h2>Rate this bathroom:</h2>
                <div className="col-xs-12">
                    <button className={`btn btn-${this.state.terribleButtonStyle}`}
                            onClick={
                                () => {
                                    this.onRating(TERRIBLE_RATING)
                                }
                            }>
                        Terrible
                    </button>
                    <button className={`btn btn-${this.state.decentButtonStyle}`}
                            onClick={
                                () => {
                                    this.onRating(DECENT_RATING)
                                }
                            }>
                        Decent
                    </button>
                    <button className={`btn btn-${this.state.splendidButtonStyle}`}
                            onClick={
                                () => {
                                    this.onRating(SPLENDID_RATING)
                                }
                            }>
                        Splendid
                    </button>
                </div>
            </div>
        )
    }
}
