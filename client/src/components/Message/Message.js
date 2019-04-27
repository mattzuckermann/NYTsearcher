import React, { Component } from 'react';
import './Message.css';
//TEST
export class Message extends Component {
  addToRecommendations(add) {
    console.log(add);
  }

  render() {
    return (
      <div className="messageContainer">
        <div className="messageHeader ">
          {this.props.sender} has recommended you read{' '}
          <a style={{ color: 'white' }} href={this.props.url}>
            {' '}
            {this.props.title}{' '}
          </a>{' '}
          with the following comments
        </div>
        <div className="messageBody">
          <div>{this.props.message}</div>
          {/* <div style={{ float: 'right' }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: 'green' }}
              onClick={() => this.addToRecommendations(true)}
            >
              Accept
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: 'red' }}
              onClick={() => this.addToRecommendations(false)}
            >
              {' '}
              Decline
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}
