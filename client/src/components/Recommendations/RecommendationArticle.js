
import moment from 'moment';
import { ListItem } from '../List'
import React, { Component } from "react";
import  {RecommendationComment }from "../../components/Recommendations";

export class RecommendationArticle extends Component {

  state = {
    commentsVisible: false
  }

  constructor(props){
    super(props);
  }

  openCommentField = () => {

    this.setState({
        commentsVisible : ! this.state.commentsVisible});
}


  render() {

    return (

      <div className="list-group" style={{ margin: '30px 0' }}>
        <a href={this.props.url} className="bg-dark list-group-item list-group-item-action flex-column align-items-start active" target="_blank">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.title}</h5>
            <small>{moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm")}</small>
          </div>
        </a>

        <ListItem className="list-group-item">
          <div className=" w-75" style={{ display: 'inline-block' }}>
            <h5 className="mb-1">{this.props.summary}</h5>
          </div>
          <div className="btn-group" role="group" aria-label="Basic example" style={{ float: 'right' }}>
            <a href={this.props.url} target='_blank'><button type="button" className="btn btn-info">Read</button></a>
            <button type="button" className="btn btn-primary" onClick={this.openCommentField}>{this.props.type}</button>
          </div>
        </ListItem>
        <RecommendationComment commentsVisible = {this.state.commentsVisible}/>
      </div>

    );
  }

}
