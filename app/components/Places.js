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
                    name: venue.name
                })
            })
        })
    }

    open(targetPlace) {
        this.setState({
            places: this.state.places.map((place) => {
                const modalStatus = place.name === targetPlace.name
                return Object.assign({}, place, { showInfo: modalStatus })
            })
        })
    }

    close() {
        this.setState({ showModal: false });
    }

    // open() {
    //     this.setState({ showModal: true });
    // }

    render() {
        const OFFSET = 1;

        return (
            <div>
                <h1 className="text-center places">Possible Venues with Bathrooms</h1>
                {
                    this.state.places.map((place, index) => {
                        const modal = {
                            name: place.name,
                            showModal: place.showInfo
                        }

                        return (
                            <div>
                                <Button
                                    bsStyle="primary"
                                    bsSize="large"
                                    key={place.id}
                                    onClick={
                                        () => {this.open(modal)}
                                }>
                                     {`${index + OFFSET}. ${place.name}`}
                                </Button>

                                <Modal show={this.state.showModal} onHide={
                                        () => {this.close()}
                                }>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{`${index + OFFSET}. ${place.name}`}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {`${index + OFFSET}. ${place.name}`}
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
