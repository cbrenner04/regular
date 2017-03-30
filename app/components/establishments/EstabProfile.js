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

                    let overallCount = 0;
                    let familyCount = 0;
                    let menCount = 0;
                    let neutralCount = 0;
                    let womenCount = 0;

                    res.forEach((item) => {
                        obj.overall += item.rating;
                        overallCount++;
                        if (item.bathroomGender === 'gender neutral') {
                            obj.neutral += item.rating;
                            neutralCount++;
                        } else if (item.bathroomGender === 'family') {
                            obj.family += item.rating;
                            familyCount++;
                        } else if (item.bathroomGender === 'female') {
                            obj.women += item.rating;
                            womenCount++;
                        } else if (item.bathroomGender === 'male') {
                            obj.men += item.rating;
                            menCount++;
                        }
                    });

                    this.setState({
                        family: obj.family / familyCount || 'no ratings yet',
                        men: obj.men / menCount || 'no ratings yet',
                        neutral: obj.neutral / neutralCount || 'no ratings yet',
                        overall: obj.overall / overallCount || 'no ratings yet',
                        women: obj.women / womenCount || 'no ratings yet'
                    });
                })
        }, TIMEOUT_LENGTH);
    }

    ratingLabel(rating) {
        if (Math.round(rating) === 1) {
            return 'TERRIBLE';
        } else if (Math.round(rating) === 2) {
            return 'DECENT';
        } else if (Math.round(rating) === 3) {
            return 'SPLENDID';
        } else {
            return 'N/A';
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Ratings</h2>
                    <div className="well col-md-12">
                        <div className="col-md-6">
                            <h3 className="text-success">
                                Overall Rating: <strong className="text-warning">
                                {this.ratingLabel(this.state.overall)}</strong>
                            </h3>
                            <h4 className="text-info">
                                Gender Neutral: <strong className="text-warning">
                                {this.ratingLabel(this.state.neutral)}</strong>
                            </h4>
                            <h4 className="text-info">
                                Family: <strong className="text-warning">
                                {this.ratingLabel(this.state.family)}</strong>
                            </h4>
                            <h4 className="text-info">
                                Female: <strong className="text-warning">
                                {this.ratingLabel(this.state.women)}</strong>
                            </h4>
                            <h4 className="text-info">
                                Male: <strong className="text-warning">
                                {this.ratingLabel(this.state.men)}</strong>
                            </h4>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={this.props.venueImgUrl}
                                 height='172' style={{margin: '20px 0'}}
                                 alt="Venue photo"/>
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
                                <h4>Rating: <strong className="text-warning">
                                    {this.ratingLabel(estab.rating)}</strong>
                                </h4>
                                <h4><em>"{estab.comment}"</em></h4>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
