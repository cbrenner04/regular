import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class Places extends Component {
    constructor() {
        super();
        this.state = { showModal: true }
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        const OFFSET = 1;

        return (
            <div>
                <h1 className="text-center places">Possible Venues with Bathrooms</h1>
                {
                    this.props.venues.map((venue, index) =>
                        <div>
                            <Button
                                bsStyle="primary"
                                bsSize="large"
                                key={venue.id}
                                onClick={this.open}
                            >
                                 {`${index + OFFSET}. ${venue.name}`}
                            </Button>
                        </div>
                    )
                }

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>TEST</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        test test test
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
