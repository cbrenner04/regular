import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import superagent from 'superagent';

const TIMEOUT_LENGTH = 500;

export default class Places extends Component {
    constructor() {
        super();
        this.state = {places: []}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            places: nextProps.venues.map((venue) => {
                return ({
                    id: venue.id,
                    name: venue.name,
                    family: '',
                    men: '',
                    neutral: '',
                    overall: '',
                    women: ''
                })
            })
        })
    }

    open(targetPlace) {
        let familyCount, menCount, neutralCount, overallCount, womenCount;
        setTimeout(() => {
            superagent.get(`/bathroom/${targetPlace.id}`).
                then((response) => {
                    const venueId = response.body._id;
                    superagent.get(`/user_establishments/${venueId}/establishment`).
                        query(null).
                        set('Accept', 'text/json').
                        then((response) => {
                            const res = response.body;

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

                            familyCount = obj.family / familyCount || 'no ratings yet',
                            menCount = obj.men / menCount || 'no ratings yet',
                            neutralCount = obj.neutral / neutralCount || 'no ratings yet',
                            overallCount = obj.overall / overallCount || 'no ratings yet',
                            womenCount = obj.women / womenCount || 'no ratings yet'

                            this.setState({
                                places: this.state.places.map((place) => {
                                    const modalStatus = place.name === targetPlace.name
                                        return Object.assign({}, place, {
                                            showModal: modalStatus,
                                            family: familyCount,
                                            men: menCount,
                                            neutral: neutralCount,
                                            overall: overallCount,
                                            women: womenCount
                                        })
                                })
                            })
                        })
                })
        }, TIMEOUT_LENGTH);
    }

    close() {
        this.setState({
            places: this.state.places.map((place) => {
                return Object.assign({}, place, { showModal: false })
            })
        })
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
        const OFFSET = 1;

        return (
            <div>
                <h1 className="text-center places">Possible Venues with Bathrooms</h1>
                {
                    this.state.places.map((place, index) => {
                        const modal = {
                            id: place.id,
                            name: place.name,
                            showModal: place.showModal,
                            family: place.family,
                            men: place.men,
                            neutral: place.neutral,
                            overall: place.overall,
                            women: place.women
                        }

                        return (
                            <div key={index}>
                                <Button
                                    style={{margin: '10px 0'}}
                                    className="btn btn-block places-well"
                                    bsStyle="default"
                                    bsSize="large"
                                    onClick={
                                        () => {this.open(modal)}
                                }>
                                     {`${index + OFFSET}. ${place.name}`}
                                </Button>

                                <Modal show={place.showModal} onHide={
                                        () => {this.close()}
                                }>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{`${index + OFFSET}. ${place.name}`}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h3 className="text-success">
                                            Overall Rating: <strong className="text-warning">
                                            {this.ratingLabel(place.overall)}</strong>
                                        </h3>
                                        <h4 className="text-info">
                                            Gender Neutral: <strong className="text-warning">
                                            {this.ratingLabel(place.neutral)}</strong>
                                        </h4>
                                        <h4 className="text-info">
                                            Family: <strong className="text-warning">
                                            {this.ratingLabel(place.family)}</strong>
                                        </h4>
                                        <h4 className="text-info">
                                            Female: <strong className="text-warning">
                                            {this.ratingLabel(place.women)}</strong>
                                        </h4>
                                        <h4 className="text-info">
                                            Male: <strong className="text-warning">
                                            {this.ratingLabel(place.men)}</strong>
                                        </h4>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={
                                            () => {this.close()}
                                        }>
                                            Close
                                        </Button>
                                        <a href={`/#/establishments/${place.id}`}
                                           className="btn btn-primary">
                                            Go here
                                        </a>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}
