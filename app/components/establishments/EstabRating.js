import React, {Component} from 'react';

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
                                        this.onRating(1)
                                    }
                                }>
                            Terrible
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onRating(2)
                                    }
                                }>
                            Decent
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onRating(3)
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
