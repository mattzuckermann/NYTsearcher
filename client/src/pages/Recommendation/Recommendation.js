import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1 } from '../../components/Headings';
import API from '../../utils/API';
import { MessagePanel } from '../../components/Message';

export default class Recommendation extends Component {
  state = {
    savedArticles: [],
  };

  componentWillMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    var user = localStorage.getItem('user');
    console.log(user);
    API.getArticlesU(user).then(results => {
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
            <MessagePanel />
          </Col>
        </Row>
      </Container>
    );
  }
}
