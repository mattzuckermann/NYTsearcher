import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import API from '../../utils/API';
import axios from 'axios';
import { SavedArticle } from '../../components/SavedArticle';

export default class SavedArticles extends Component {
  state = {
    savedArticles: [], //stores saved articles in state for rendering
  };

  //initial loading of saved articles
  componentWillMount() {
    this.loadArticles();
  }

  async componentDidMount() {
    await axios.defaults.headers.common['Authorization'];
    const jwt = await localStorage.getItem('jwtToken');
    if (jwt === null) {
      this.props.history.push('/login');
    }
    const user = await localStorage.getItem('user');
    API.getArticlesU(user)
      .then(res => {})
      .catch(error => {
        if (error.response.status === 401) {
          console.log(error.response);
        }
      });
  }

  //function that queries the API server and retrieves saved articles
  loadArticles = () => {
    const user = localStorage.getItem('user');
    console.log(user);
    API.getArticlesU(user).then(results => {
      this.setState({ savedArticles: results.data });
    });
  };

  //function that queries API server and deletes articles
  deleteArticle = id => {
    const user = localStorage.getItem('user');
    API.deleteArticleU(user, id)
      .then(results => {
        //once deleted, they are removed from the state and articles are rendered
        let savedArticles = this.state.savedArticles.filter(article => article._id !== id);
        this.setState({ savedArticles: savedArticles });
        this.loadArticles();
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
                <H3>Saved Articles</H3>
              </PanelHeading>
              <PanelBody>
                {this.state.savedArticles.length > 0 ? (
                  this.state.savedArticles.map((article, i) => (
                    <SavedArticle
                      key={i}
                      _id={article._id}
                      title={article.title}
                      url={article.url}
                      summary={article.summary}
                      date={article.date}
                      type="Delete"
                      onClick={() => this.deleteArticle(article._id)}
                    />
                  ))
                ) : (
                  <H1>You have no saved articles.</H1>
                )}
              </PanelBody>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}
