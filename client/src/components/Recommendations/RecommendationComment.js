import React, { Component } from 'react';
// import API from "../../utils/API";

export class RecommendationComment extends Component {
  state = {
    receiver: '',
    messageBody: '',
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    //API.getUser()
    event.preventDefault();
  }
  render() {
    return (
      <div className="recommendContainer">
        {this.props.commentsVisible ? (
          <form onSubmit={this.handleSubmit} id="usrform">
            Send To:{' '}
            <textarea
              type="text"
              name="receiver"
              value={this.state.receiver}
              onChange={this.handleChange}
            />
            <div>
              <div>
                <label> Make a Comment!</label>
              </div>
              <div>
                <textarea
                  name="messageBody"
                  value={this.state.messageBody}
                  onChange={this.handleChange}
                  lass="comments"
                  rows="12"
                  cols="50"
                  form="usrform"
                />
              </div>
            </div>
            <input type="submit" />
          </form>
        ) : null}
      </div>
    );
  }
}
