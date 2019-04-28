import React from 'react';
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import { H1, H3 } from '../../components/Headings';

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="sm-10" offset="sm-1">
        <Jumbotron>
          <H1 className="text-center">404 ERROR</H1>
          <br />
          <H3 className="text-center">The page you were looking for was moved or doesn't exist.</H3>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
