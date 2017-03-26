import React, {Component} from 'react';
import superagent from 'superagent';

export default class EstabProfile extends Component {
    constructor() {
        super();
        this.state = {
            overall: 'None yet.',
            neutral: "None yet.",
            family: "None yet.",
            women: "None yet.",
            men: "None yet."
        }
    }

    componentDidMount() {
        let venueId;
        setTimeout(() => { 
            venueId = this.props.venueId
            console.log(venueId);
            superagent.get(`/user_establishments/${venueId}`).query(null).
                set('Accept', 'text/json').
                then((response) => {
                    res = response.body
                    console.log(res);
                    this.setState({
                        overall: res,
                        neutral: res,
                        family: res,
                        women: res,
                        men: res
                    });
                })
        }, 500);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Ratings</h2>
                    <div className="well">
                        <h3 className="text-success">Bathrooms Overall: {}</h3>
                        <h4 className="text-info">Gender Neutral: {}</h4>
                        <h4 className="text-info">Family: {}</h4>
                        <h4 className="text-info">Women: {}</h4>
                        <h4 className="text-info">Men: {}</h4>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    <div className="well">
                        <h4>Timestamp</h4>
                        <h4>Rating</h4>
                        <p>Dummy Comment</p>
                    </div>
                </div>
            </div>
        )
    }
}
