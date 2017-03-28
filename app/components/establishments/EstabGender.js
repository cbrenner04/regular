import React, {Component} from 'react';

const FEMALE_SELECTOR = 'female';
const MALE_SELECTOR = 'male';
const GENDER_NEUTRAL_SELECTOR = 'gender neutral';
const FAMILY_SELECTOR = 'family';

export default class EstabGender extends Component {
    constructor() {
        super();
        this.state = {
            femaleButtonStyle: 'default',
            maleButtonStyle: 'default',
            genderNeutralButtonStyle: 'default',
            familyButtonStyle: 'default'
        }
    }

    onSelection(gender) {
        if (gender === FEMALE_SELECTOR) {
            this.setState({
                femaleButtonStyle: 'warning',
                maleButtonStyle: 'default',
                genderNeutralButtonStyle: 'default',
                familyButtonStyle: 'default'
            })
        } else if (gender === MALE_SELECTOR) {
            this.setState({
                femaleButtonStyle: 'default',
                maleButtonStyle: 'warning',
                genderNeutralButtonStyle: 'default',
                familyButtonStyle: 'default'
            })
        } else if (gender === GENDER_NEUTRAL_SELECTOR) {
            this.setState({
                femaleButtonStyle: 'default',
                maleButtonStyle: 'default',
                genderNeutralButtonStyle: 'warning',
                familyButtonStyle: 'default'
            })
        } else if (gender === FAMILY_SELECTOR) {
            this.setState({
                femaleButtonStyle: 'default',
                maleButtonStyle: 'default',
                genderNeutralButtonStyle: 'default',
                familyButtonStyle: 'warning'
            })
        }
        this.props.onGenderResponse(gender);
    }

    render() {
        return (
            <div>
                <div className="gender-main">
                    <h2>What bathroom are you using?</h2>
                    <div className="col-xs-12" style={{
    paddingLeft: 0}}
>
                        <button className={`btn btn-${this.state.femaleButtonStyle}`}
                                onClick={
                                    () => {
                                        this.onSelection(FEMALE_SELECTOR)
                                    }
                                }>
                            Female
                        </button>
                        <button className={`btn btn-${this.state.maleButtonStyle}`}
                                onClick={
                                    () => {
                                        this.onSelection(MALE_SELECTOR)
                                    }
                                }>
                            Male
                        </button>
                        <button className={`btn btn-${this.state.genderNeutralButtonStyle}`}
                                onClick={
                                    () => {
                                        this.onSelection(GENDER_NEUTRAL_SELECTOR)
                                    }
                                }>
                            Gender Neutral
                        </button>
                        <button className={`btn btn-${this.state.familyButtonStyle}`}
                                onClick={
                                    () => {
                                        this.onSelection(FAMILY_SELECTOR)
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
