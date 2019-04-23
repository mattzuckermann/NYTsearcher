/* eslint-disable default-case */
import React, { Component } from 'react';
import API from '../../utils/API';
import './Recommendations.css';

export class RecommendationComment extends Component {
  state = {
    receiver: '',
    message: '',
    articleData: '',
    userFound: false,
    setting: 0,
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
    var sender = localStorage.getItem('user');

    API.getUser(this.state.receiver).then(receiver => {
      var userFound = receiver.data === null;
      if (userFound) {
        this.setState({ setting: 1 });
      } else {
        this.setState({ setting: 2 });
        API.createRecommendation({
          sender: sender,
          receiver: this.state.receiver,
          message: this.state.message,
          title: this.props.articleData.title,
          url: this.props.articleData.url,
        }).then(result => {
          console.log(result);
        });
      }
    });
    event.preventDefault();
  }

  changeMessageNotification(setting) {
    switch (setting) {
      case 0:
        return <div />;
      case 1:
        return <div> Recipient Not Found</div>;
      case 2:
        return <div> Message Sent!</div>;
    }
  }

  render() {
    return (
      <div className="recommendationContainer">
        {this.props.commentsVisible ? (
          <form onSubmit={this.handleSubmit} id="usrform">
            <div>
              Send To:{' '}
              <textarea
                type="text"
                name="receiver"
                rows="1"
                value={this.state.receiver}
                onChange={this.handleChange}
              />
            </div>
            <div> {this.changeMessageNotification(this.state.setting)}</div>
            <div>
              <div>
                <label> Make a Comment!</label>
              </div>
              <div>
                <textarea
                  name="message"
                  value={this.state.messageBody}
                  onChange={this.handleChange}
                  lass="comments"
                  rows="6"
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
