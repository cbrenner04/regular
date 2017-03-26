import React, {Component} from 'react';

const TERRIBLE_RATING = 1;
const DECENT_RATING = 2;
const SPLENDID_RATING = 3;

export default class EstabRating extends Component {
    onRating(rating) {
        this.props.onRatingResponse(rating);
    }
    render() {
        return (
            <div className="row">
                <div className="gender-main">
                    <h2>Rate this bathroom:</h2>
                    <div className="col-xs-12">
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onRating(TERRIBLE_RATING)
                                    }
                                }>
                            Terrible
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onRating(DECENT_RATING)
                                    }
                                }>
                            Decent
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onRating(SPLENDID_RATING)
                                    }
                                }>
                            Splendid
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
