import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import API from '../../utils/API';
import axios from 'axios';
import { Article } from '../../components/Article';

export default class SavedArticles extends Component {
  state = {
    savedArticles: [], //stores saved articles in state for rendering
  };

  //initial loading of saved articles
  componentWillMount() {
    this.loadArticles();
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios
      .get('/api/article')
      .then(res => {
        console.log('Authorized.');
        // console.log(res);
      })
      .catch(error => {
        if (error.response.status === 401) {
          console.log('Unauthorized');
          this.props.history.push('/login');
        }
      });
  }

  //function that queries the API server and retrieves saved articles
  loadArticles = () => {
    API.getArticles().then(results => {
      this.setState({ savedArticles: results.data });
    });
  };

  //function that queries API server and deletes articles
  deleteArticle = id => {
    API.deleteArticle(id)
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
                    <Article
                      key={i}
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
