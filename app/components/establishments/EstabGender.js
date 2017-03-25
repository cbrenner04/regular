import React, {Component} from 'react';

export default class EstabGender extends Component {
    onSelection(gender) {
        this.props.onGenderResponse(gender);
    }
    render() {
        return (
            <div className="row">
                <div className="gender-main">
                    <h2>What bathroom are you using?</h2>
                    <div className="col-xs-12">
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onSelection('female')
                                    }
                                }>
                            Female
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onSelection('male')
                                    }
                                }>
                            Male
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onSelection('gender neutral')
                                    }
                                }>
                            Gender Neutral
                        </button>
                        <button className="btn btn-default"
                                onClick={
                                    () => {
                                        this.onSelection('family')
                                    }
                                }>
                            Family
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
