import React, {Component} from 'react';

export default class EstabInteractionType extends Component {
    onSelection(interactionType) {
        this.props.onInteractionResponse(interactionType);
    }
    render() {
        return (
            <div className="row">
                <div className="estabBody">
                    <div className="button-body">
                        <div className="btn-group btn-group-justified col-xs-8">
                            <a onClick={
                                () => {
                                    this.onSelection('check in')
                                }
                            }
                               className="btn btn-success">Check In</a>
                            <a onClick={
                                () => {
                                    this.onSelection('rate it')
                                }
                            }
                               className="btn btn-danger">Rate It</a>
                            <a onClick={
                                () => {
                                    this.onSelection('save it')
                                }
                            }
                               className="btn btn-warning">Save It</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
