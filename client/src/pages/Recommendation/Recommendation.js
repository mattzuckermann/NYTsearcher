import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import API from '../../utils/API';
import axios from 'axios';
import { RecommendationArticle } from '../../components/Recommendations';

export default class Recommendation extends Component {
  state = {
    savedArticles: [],
    //recommendedForYou : []
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset="sm-1">
            <Jumbotron>
              <H1 className="text-center">Make A Recommendation</H1>
              <hr style={{ width: '60%' }} />
            </Jumbotron>
            <Panel>
              <PanelHeading>
                <H3>Make A Recommendation</H3>
              </PanelHeading>
              <PanelBody>
                {this.state.savedArticles.length > 0 ? (
                  this.state.savedArticles.map((article, i) => (
                    <div>
                      <RecommendationArticle
                        key={i}
                        title={article.title}
                        url={article.url}
                        summary={article.summary}
                        date={article.date}
                        type="Recommend"
                      />
                    </div>
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
