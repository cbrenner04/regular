import React, {Component} from 'react';
import superagent from 'superagent';

const TIMEOUT_LENGTH = 500;

export default class EstabProfile extends Component {
    constructor() {
        super();
        this.state = {
            estabs: [],
            family: 'None yet.',
            men: 'None yet.',
            neutral: 'None yet.',
            overall: 'None yet.',
            women: 'None yet.'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const {venueId} = this.props
            superagent.get(`/user_establishments/${venueId}/establishment`).
                query(null).
                set('Accept', 'text/json').
                then((response) => {
                    const res = response.body;

                    this.setState({estabs: res})

                    const obj = {
                        family: 0,
                        men: 0,
                        neutral: 0,
                        overall: 0,
                        women: 0
                    }

                    const count = res.length;

                    res.forEach((item) => {
                        obj.overall += item.rating;
                        if (item.bathroomGender === 'gender neutral') {
                            obj.neutral += item.rating;
                        } else if (item.bathroomGender === 'family') {
                            obj.family += item.rating;
                        } else if (item.bathroomGender === 'female') {
                            obj.women += item.rating;
                        } else if (item.bathroomGender === 'male') {
                            obj.men += item.rating;
                        }
                    });

                    this.setState({
                        family: obj.family / count,
                        men: obj.men / count,
                        neutral: obj.neutral / count,
                        overall: obj.overall / count,
                        women: obj.women / count
                    });
                })
        }, TIMEOUT_LENGTH);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Ratings</h2>
                    <div className="well">
                        <h3 className="text-success">
                            Bathrooms Overall: {this.state.overall}
                        </h3>
                        <h4 className="text-info">
                            Gender Neutral: {this.state.neutral}
                        </h4>
                        <h4 className="text-info">
                            Family: {this.state.family}
                        </h4>
                        <h4 className="text-info">
                            Female: {this.state.women}
                        </h4>
                        <h4 className="text-info">
                            Male: {this.state.men}
                        </h4>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    {
                        this.state.estabs.map((estab) =>
                            <div className="well">
                                <h4>Gender: {estab.bathroomGender}</h4>
                                <h4>Rating: {estab.rating}</h4>
                                <p>{estab.comment}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
