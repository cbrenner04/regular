import React, {Component} from 'react';
import EstabComments from './EstabComments.js';
import EstabGender from './EstabGender';
import EstabRating from './EstabRating.js';

export default class EstabForm extends Component {
    constructor() {
        super();
        this.state = {
            commentSet: false,
            comments: '',
            gender: '',
            genderSet: false,
            rating: '',
            ratingSet: false
        }
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

    onCommentsSubmit() {
        // const input = { comments: this.state.comments };
        // Post submitted form
        this.setState({comments: ''});
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
                <p>{ this.state.gender }</p>
                <p>{ this.state.genderSet.toString() }</p>
                <EstabRating onRatingResponse={
                    (rating) => {
                        this.onRatingSubmit(rating)
                    }
                }/>
                <p>{ this.state.rating }</p>
                <p>{ this.state.ratingSet.toString() }</p>
                <EstabComments comments={ this.state.comments }
                               onUserInput={
                                   (object) => this.handleUserInput(object)
                               }
                               onCommentsResponse={
                                   () => {
                                       this.onCommentsSubmit()
                                   }
                               }/>
                <p>{ this.state.comments}</p>
                <p>{ this.state.commentSet.toString() }</p>
                <button className="btn btn-success">Submit</button>
            </div>
        )
    }
}
