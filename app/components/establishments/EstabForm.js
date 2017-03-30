import React, {Component} from 'react';
import EstabComments from './EstabComments.js';
import EstabGender from './EstabGender';
import EstabRating from './EstabRating.js';
import superagent from 'superagent';
import { hashHistory } from 'react-router';

export default class EstabForm extends Component {
    constructor() {
        super();
        this.state = {
            commentSet: false,
            comments: '',
            establishmentId: '',
            gender: '',
            genderSet: false,
            rating: '',
            ratingSet: false,
            userId: ''
        }
    }

    componentDidMount() {
        const venue = this.props.venueId;
        superagent.get('/email').query(null).
            set('Accept', 'text/json').
            then((response) => {
                this.setState({
                    establishmentId: venue,
                    userId: response.body._id
                })
            })
    }

    onGenderSubmit(gender) {
        this.setState({
            gender: gender,
            genderSet: true
        })
    }

    onRatingSubmit(rating) {
        this.setState({
            rating: rating,
            ratingSet: true
        });
    }

    submitForm() {
        superagent.post('/user_establishments').
            send({
                comments: this.state.comments,
                establishmentId: this.state.establishmentId,
                gender: this.state.gender,
                rating: this.state.rating,
                userId: this.state.userId
            }).
            set('Accept', 'application/json').
            then(() => {
                this.setState({
                    commentSet: false,
                    comments: '',
                    gender: '',
                    genderSet: false,
                    rating: '',
                    ratingSet: false
                });
                hashHistory.push(`/establishments/${this.props.venueId}`);
            });
    }

    handleUserInput(obj) {
        this.setState(obj);
        this.setState({commentSet: true})
    }

    render() {
        return (
            <div>
                <EstabGender onGenderResponse={
                    (gender) => {
                        this.onGenderSubmit(gender)
                    }
                }/>
                <EstabRating onRatingResponse={
                    (rating) => {
                        this.onRatingSubmit(rating)
                    }
                }/>
                <br />
                <br />
                <EstabComments comments={ this.state.comments }
                               onUserInput={
                                   (object) => this.handleUserInput(object)
                               }
                               onCommentsResponse={
                                   () => {
                                       this.onCommentsSubmit()
                                   }
                               }/>
                <button className="btn btn-lg btn-block btn-success"
                        onClick={
                          () => {
                              this.submitForm();
                          }
                        }>
                    Submit
                </button>
            </div>
        )
    }
}
