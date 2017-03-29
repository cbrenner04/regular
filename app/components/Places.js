import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class Places extends Component {
    constructor() {
        super();
        this.state = { places: [] }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            places: nextProps.venues.map((venue) => {
                return ({
                    id: venue.id,
                    name: venue.name
                })
            })
        })
    }

    open(targetPlace) {
        // query database here
        this.setState({
            places: this.state.places.map((place) => {
                const modalStatus = place.name === targetPlace.name
                return Object.assign({}, place, { showModal: modalStatus })
            })
        })
    }

    close() {
        this.setState({
            places: this.state.places.map((place) => {
                return Object.assign({}, place, { showModal: false })
            })
        })
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
                            showModal: place.showModal
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
                                        <a href={`/#/establishments/${place.id}`}>
                                            {`${index + OFFSET}. ${place.name}`}
                                        </a>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={
                                            () => {this.close()}
                                        }>
                                            Close
                                        </Button>
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
