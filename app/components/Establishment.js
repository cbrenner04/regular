import React, {Component} from 'react';
import EstabCheckIn from './establishments/EstabCheckIn.js';
import EstabComments from './establishments/EstabComments.js';
import EstabGender from './establishments/EstabGender';
import EstabInteractionType from './establishments/EstabInteractionType.js';
import EstabRating from './establishments/EstabRating.js';
import Foursquare from '../../foursquareApiKey';
import superagent from 'superagent';

export default class Establishment extends Component {
    constructor() {
        super();
        this.state = {
            checkIn: '',
            checkInSet: false,
            commentSet: false,
            comments: '',
            gender: '',
            genderSet: false,
            interactionType: '',
            rating: '',
            ratingSet: false,
            venueAddress: '',
            venueCrossStreet: '',
            venueId: '',
            venueName: ''
        }
    }

    componentDidMount() {
        const url = 'https://api.foursquare.com/v2/venues/' +
                    `${this.props.params.eId}?v=20140806&client_id=` +
                    `${Foursquare.id}&client_secret=${Foursquare.secret}`

        superagent.get(url).query(null).
            set('Accept', 'text/json').
            then((response) => {
                const {venue} = response.body.response

                return this.setState({
                    venueAddress: venue.location.address,
                    venueCrossStreet: venue.location.crossStreet,
                    venueId: venue.id,
                    venueName: venue.name
                })
            }).
            then(() => superagent.get(`/bathroom/${this.state.venueId}`))
    }

    onGenderSubmit(gender) {
        this.setState({
            gender: gender,
            genderSet: true
        })
    }

    onInteractionSubmit(interactionType) {
        this.setState({interactionType});
    }

    onRatingSubmit(rating) {
        this.setState({rating});
    }
    onCheckInSubmit(checkIn) {
        this.setState({
            checkIn: checkIn,
            checkInSet: true
        });
    }
    onCommentsSubmit() {
        // const input = { comments: this.state.comments };
        // Post submitted form
        this.setState({comments: ''});
    }
    handleUserInput(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <div className="container">
              <div className="jumbotron text-center" id="jumbo">
                <div className="well well-sm">
                  <h1>{ this.state.venueName }</h1>
                  <h2>{ this.state.venueAddress }</h2>
                  <h3>{ this.state.venueCrossStreet }</h3>
                </div>
              </div>
              <br />

              <EstabGender onGenderResponse={
                  (gender) => {
                      this.onGenderSubmit(gender)
                  }
              }/>
              <p>{ this.state.gender }</p>
              <p>{ this.state.genderSet }</p>
              <EstabInteractionType onInteractionResponse={
                  (interactionType) => {
                      this.onInteractionSubmit(interactionType)
                  }
              } />
              <p>{ this.state.interactionType}</p>
              <EstabRating onRatingResponse={
                  (rating) => {
                      this.onRatingSubmit(rating)
                  }
              }/>
              <p>{ this.state.rating }</p>
              <EstabCheckIn onCheckInResponse={
                  (checkIn) => {
                      this.onCheckInSubmit(checkIn)
                  }
              }/>
              <p>{ this.state.checkIn }</p>
              <p>{ this.state.checkInSet }</p>
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
            </div>
        )
    }
}

