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
                                        this.onRating('terrible')
                                    }
                                }>
                            Terrible
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onRating('decent')
                                    }
                                }>
                            Decent
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onRating('splendid')
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
