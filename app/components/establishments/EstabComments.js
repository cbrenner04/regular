import React, {Component} from 'react';

export default class EstabComments extends Component {
    handleChange(event) {
        const comments = event.target.name;
        const obj = {};
        obj[comments] = event.target.value;
        this.props.onUserInput(obj);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onCommentsResponse();
    }
    render() {
        return (
          <div className="row">
                <div className="gender-main">
                    <h2>Leave a comment?</h2>
                    <div className="col-xs-12">
                      <form id={'hello'}
                            onSubmit={ (event) => this.handleSubmit(event) }>
                          <input type="text"
                                 name="comments"
                                 value={ this.props.comments }
                                 onChange={
                                     (event) => this.handleChange(event)
                                 }
                                 id={'hello'} />
                          <button type="submit"
                                  form={'hello'}
                                  className="btn btn-default">
                            Post Your Comments!
                          </button>
                    </form>
                  </div>
                </div>
              </div>
        )
    }
}
