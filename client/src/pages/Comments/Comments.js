import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { Article } from '../../components/Article';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import axios from 'axios';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios
      .get(`/api/article/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ article: res.data });
        console.log(this.state.article);
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push('/login');
        }
      });
  }

  //function that queries API server and deletes articles
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(results => {
        //once deleted, user redirected to savedArticles page
        this.props.history.push('/savedArticles');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset="sm-1">
            <Jumbotron>
              <H1 className="text-center">Saved New York Times Articles</H1>
              <hr style={{ width: '60%' }} />
            </Jumbotron>
            <Panel>
              <PanelHeading>
                <H3>Comment On Article</H3>
              </PanelHeading>
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
                <Link to={`/savedArticles`}>See All Saved Articles</Link>
              </PanelBody>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Comments;
