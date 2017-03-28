import React, {Component} from 'react';
import moment from 'moment';
import superagent from 'superagent';

const TIMEOUT_LENGTH = 500;

export default class EstabProfile extends Component {
    constructor() {
        super();
        this.state = {
            estabs: [],
            family: '',
            men: '',
            neutral: '',
            overall: '',
            women: ''
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
                        family: obj.family / count || 'no ratings yet',
                        men: obj.men / count || 'no ratings yet',
                        neutral: obj.neutral / count || 'no ratings yet',
                        overall: obj.overall / count || 'no ratings yet',
                        women: obj.women / count || 'no ratings yet'
                    });
                })
        }, TIMEOUT_LENGTH);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Ratings</h2>
                    <div className="well col-md-12">
                        <div className="col-md-6">
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
                        <div className="col-md-6 text-center">
                            <img src={this.props.venueImgUrl} height='172' style={{margin: '20px 0'}}/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    {
                        this.state.estabs.map((estab) =>
                            <div className="well" key={estab._id}>
                                <h3>{estab.user.givenName}</h3>
                                <p>{moment(estab.createdAt).format('LLL')}</p>
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
