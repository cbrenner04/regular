import React from 'react';

const EstabBody = () =>
  <div>
    <div className="row">
      <div className="estabBody">
        <div calssName="button-body">
          <div className="btn-group btn-group-justified col-xs-8">
            <a href="#" className="btn btn-success">Check In</a>
            <a href="#" className="btn btn-danger">Rate It</a>
            <a href="#" className="btn btn-warning">Save It</a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-xs-6">
      <form className="form-group">
        <fieldset>
          <legend>Leave a comment</legend>
          <div className="form-group">
            <div>
              <textarea className="form-control" rows="3" id="textArea">
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
      </div>
      <div className="col-xs-4 col-xs-offset-2">
        <form className="form-group">
          <fieldset>
            <legend>B-room Score</legend>
              <div className="well">
                <div className="score text-center">8.2</div>
              </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>

export default EstabBody;