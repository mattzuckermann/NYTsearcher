import React, { Component } from 'react';
 import API from "../../utils/API";

export class RecommendationComment extends Component {
  state = {
    receiver: '',
    message: '',
    articleData : '',
    userFound : true
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

    var user = localStorage.getItem("user");
    API.getUser(this.state.receiver).then(user => {
      console.log(user);
      this.setState({userFound : user === null});
      if (user === null){

      } else {
        API.createRecommendation({
          sender: user,
          receiver: this.state.receiver,
          message: this.state.message,
          title : this.props.articleData.title,
          url : this.props.articleData.url
        }).then(result => {
          console.log(result);
        });
      }
      
    });
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
            /> <div> { this.state.userFound ? <div></div> : <div> Receiver Not Found</div>}</div>
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
