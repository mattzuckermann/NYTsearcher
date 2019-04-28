import moment from 'moment';
import { ListItem } from '../List';
import React, { Component } from 'react';
import { Row, Col } from '../Grid';
import { RecommendationComment } from '../Recommendations/RecommendationComment';

export class SavedArticle extends Component {
  state = {
    commentsVisible: false,
  };

  openCommentField = () => {
    this.setState({
      commentsVisible: !this.state.commentsVisible,
    });
  };

  render() {
    return (
      <div className="list-group" style={{ margin: '30px 0' }}>
        <a
          href={this.props.url}
          className="bg-dark list-group-item list-group-item-action flex-column align-items-start active"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.title}</h5>
            <small>{moment(this.props.date).format('dddd, MMMM Do YYYY, h:mm')}</small>
          </div>
        </a>
        <ListItem className="list-group-item">
          <Row>
            <Col size="lg-12" offset="sm-1">
              <div className=" w-75" style={{ display: 'inline-block' }}>
                <h5 className="mb-1">{this.props.summary}</h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="lg-12" offset="sm-1">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
                style={{ float: 'right' }}
              >
                <Row>
                  <Col size="md-12">
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                      <button
                        type="button"
                        className="btn btn-info"
                        style={{ padding: '5px', width: '100px' }}
                      >
                        Read
                      </button>
                    </a>
                    <a href={`${this.props._id}`}>
                      <button
                        type="button"
                        className="btn btn-dark"
                        style={{ padding: '5px', width: '100px' }}
                      >
                        Comment
                      </button>
                    </a>
                    {/* </Col>
                  <Col size="md-6"> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ padding: '5px', width: '100px' }}
                      onClick={this.openCommentField}
                    >
                      Recommend
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ padding: '5px', width: '100px' }}
                      onClick={this.props.onClick}
                    >
                      {this.props.type}
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </ListItem>
        <RecommendationComment
          articleData={this.props}
          commentsVisible={this.state.commentsVisible}
        />
      </div>
    );
  }
}
