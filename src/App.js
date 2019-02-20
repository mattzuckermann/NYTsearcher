import React, { Component } from 'react';
import { Container, Row, Col } from './components/Grid';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Nav children="Welcome To This React App!" />
          <Jumbotron>
            <Row>
              <Col size="md-12">
                <p className="bioText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem esse iure
                </p>
                <p className="bioText">
                  praesentium animi ea quaerat earum accusamus odit, facere ut quidem dolorem, sed,
                </p>
                <p className="bioText">blanditiis veniam expedita magni vitae necessitatibus!</p>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default App;
