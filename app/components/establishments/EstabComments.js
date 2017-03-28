import React, {Component} from 'react';

export default class EstabComments extends Component {
    handleChange(event) {
        const comments = event.target.name;
        const obj = {};
        obj[comments] = event.target.value;
        this.props.onUserInput(obj);
    }
    render() {
        return (
          <div>
                <div className="gender-main">
                    <h2>Leave a comment?</h2>
                    <div className="col-xs-12" style={{paddingLeft: 0}}>
                      <form onSubmit={ (event) => this.handleSubmit(event) }>
                          <textarea type="text"
                                    rows="10"
                                    style={{width: '100%'}}
                                    name="comments"
                                    value={ this.props.comments }
                                    onChange={
                                        (event) => this.handleChange(event)
                                    } />
                    </form>
                  </div>
                </div>
              </div>
        )
    }
}
