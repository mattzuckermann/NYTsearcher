import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { Form, Input, FormBtn, FormGroup, Label } from '../../components/Form';
import { Article } from '../../components/Article';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import axios from 'axios';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        comments: [],
      },
    };
  }

  async componentDidMount() {
    await axios.defaults.headers.common['Authorization'];
    const jwt = await localStorage.getItem('jwtToken');
    if (jwt === null) {
      this.props.history.push('/login');
    } else {
      const user = localStorage.getItem('user');
      const id = this.props.match.params.id;
      await Promise.all([user, id]);
      API.getArticleU(user, id)
        .then(result => {
          this.setState({ article: result.data });
        })
        .catch(error => {
          if (error.response.status === 401) {
            console.log(error.response);
          }
        });
    }
  }

  //capturing state of inputs on change
  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { article, subjectForm, authorForm, commentForm } = this.state;
    API.saveComment(article._id, subjectForm, authorForm, commentForm)
      .then(res => {
        this.setState({ comments: res.data.comments });
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      subjectForm: '',
      authorForm: '',
      commentForm: '',
    });
    window.location.reload();
  };

  //function that queries API server and deletes articles
  deleteArticle = id => {
    const user = localStorage.getItem('user');
    API.deleteArticleU(user, id)
      .then(results => {
        this.props.history.push('/articles');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset="sm-1">
            <Jumbotron>
              <H1 className="text-center">Leave A Comment</H1>
              <hr style={{ width: '60%' }} />
            </Jumbotron>
            <Panel>
              <PanelBody>
                <Article
                  _id={this.state.article._id}
                  title={this.state.article.title}
                  url={this.state.article.url}
                  summary={this.state.article.summary}
                  date={this.state.article.date}
                  type="Delete"
                  onClick={() => this.deleteArticle(this.state.article._id)}
                />
                <Link to={`/articles`}>See All Saved Articles</Link>
                <br />
                <br />
                <br />
                <br />
                <PanelHeading>
                  <H3>Comment On Article</H3>
                </PanelHeading>
                <Form style={{ marginBottom: '30px' }}>
                  <FormGroup>
                    <Label htmlFor="subjectForm">Enter a subject for the comment:</Label>
                    <Input
                      onChange={this.handleInputChange}
                      name="subjectForm"
                      value={this.state.subjectForm}
                      placeholder="Subject"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="authorForm">Enter your name as the author of this note:</Label>
                    <Input
                      onChange={this.handleInputChange}
                      name="authorForm"
                      value={this.state.authorForm}
                      placeholder="Author"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="commentForm">Enter your comment here:</Label>
                    <Input
                      onChange={this.handleInputChange}
                      name="commentForm"
                      value={this.state.commentForm}
                      placeholder="Comment"
                    />
                  </FormGroup>

                  <FormBtn
                    disabled={
                      !this.state.subjectForm || !this.state.authorForm || !this.state.commentForm
                    }
                    onClick={this.handleFormSubmit}
                    type="info"
                  >
                    Submit
                  </FormBtn>
                </Form>
                <br />
                <br />
              </PanelBody>
              <PanelBody>
                {this.state.article.comments.length === 0 ? (
                  <PanelHeading>
                    <H1>There are no comments to show</H1>
                    <br />
                    <br />
                    <br />
                    <br />
                  </PanelHeading>
                ) : (
                  <Panel>
                    <PanelHeading>
                      <H3>Comments Section</H3>
                    </PanelHeading>
                    <PanelBody>
                      {this.state.article.comments.map(comment => (
                        <Article
                          title={`|| Subject: ${comment.subject} || Author: ${comment.author} ||`}
                          summary={`Comment: ${comment.comment}`}
                        />
                      ))}
                    </PanelBody>
                  </Panel>
                )}
              </PanelBody>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Comments;
